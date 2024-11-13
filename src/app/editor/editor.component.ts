import { Component } from '@angular/core';
import { Editor } from 'ngx-editor';
import { EditorService } from './editor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css'
})
export class EditorComponent {

  constructor(private editorservice: EditorService, private router: Router, private route: ActivatedRoute) {}

  editor!: Editor;
  html:string = '';
  parentId = '';

  ngOnInit(): void {
    this.editor = new Editor();
    let data = this.route.snapshot.queryParamMap.get('data');
    if(data != null) {
      this.html = data;
    }
  }

  // make sure to destory the editor
  ngOnDestroy(): void {
    this.editor.destroy();
  }

  saveContent(html: any) {
    let data = {
      data: html,
      parentId: this.parentId,
      childrenIds: []
    }
    this.editorservice.saveToBackend(data).subscribe({
      next: (res) => {
        console.log("data saved");
        this.router.navigate(['/']);
      },
      error: (error) => console.log("some stupid error"),
    });

  }
}
