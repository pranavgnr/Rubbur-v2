import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';
import { HomeService } from '../home/home.service';
import { Router } from '@angular/router';
import { BookService } from './book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  @Input() heading: string | undefined;
  @Output() isMaximize = new EventEmitter<boolean>();
  title:any = ''
  parentId: string = ''

  constructor(private homeservice: HomeService, private router: Router, private bookservice: BookService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.title = this.heading;
    this.parentId = this.title._id;
    this.title = this.title.data;
  }

  editBook() {
    this.router.navigate(['/editor'], { queryParams: { data: this.title, id: this.parentId } });
  }

  deleteBook() {
    const data = {
      parentId: this.parentId
    }
    this.bookservice.deleteBook(data).subscribe(res => {
      console.log("book deleted: ",res);
    });

  }

  goIntoBook() {
    this.router.navigate(['/'], { queryParams: { parentId: this.parentId } });
  }

  maximizeBook() {
  }
}
