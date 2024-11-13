import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';
import { HomeService } from '../home/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  @Input() heading: string | undefined;
  @Output() isMaximize = new EventEmitter<boolean>();
  title:any = ''

  constructor(private homeservice: HomeService, private router: Router) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.title = this.heading;
  }

  editBook() {
    this.router.navigate(['/editor'], { queryParams: { data: this.title } });
  }

  deleteBook() {

  }

  goIntoBook() {

  }

  maximizeBook() {
  }
}
