import { Component } from '@angular/core';
import { HomeService } from './home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  items:any = [];

  constructor(private homeService: HomeService, private router: Router) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.homeService.getMainBooks().subscribe((res)=>{
      console.log(res);
      res.forEach((books: any) => {
        this.items.push(books.data);
      });
    })
    console.log(this.items);

  }

  addBook() {
    this.router.navigate(['/editor']);
  }

}
