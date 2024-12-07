import { Component } from '@angular/core';
import { Editor } from 'ngx-editor';
import { EditorService } from './editor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css'
})
export class EditorComponent {

  constructor(private editorservice: EditorService, private router: Router, private route: ActivatedRoute, private location: Location) {}

  editor!: Editor;
  html:string = '';
  parentId = '';
  currentId = '';

  ngOnInit(): void {
    this.editor = new Editor();
    let data = this.route.snapshot.queryParamMap.get('data');
    let parentId = this.route.snapshot.queryParamMap.get('parentId');
    let id = this.route.snapshot.queryParamMap.get('id');
    if(data != null) {
      this.html = data;
    }
    if(parentId != null){
      this.parentId = parentId;
    }
    if(id != null) {
      this.currentId = id;
    }
  }

  // make sure to destory the editor
  ngOnDestroy(): void {
    this.editor.destroy();
  }

  saveContent(html: any) {
    if(this.currentId == '') {
      let data = {
        data: html,
        parentId: this.parentId,
        childrenIds: []
      }
      this.editorservice.saveToBackend(data).subscribe({
        next: (res) => {
          console.log("data saved");
         this.location.back()
        },
        error: (error) => console.log("some stupid error"),
      });

    } else {
      let data = {
        data: html,
        parentId: this.parentId,
        childrenIds: [],
        id: this.currentId
      }
      this.editorservice.updateToBackend(data).subscribe({
        next: (res) => {
          console.log("data saved");
          this.location.back()
        },
        error: (error) => console.log("some stupid error"),
      });
    }
  }
}
