import { Component } from '@angular/core';
import { HomeService } from './home.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  items:any = [];
  parentId: any;
  constructor(private homeService: HomeService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    //let parentId = this.route.snapshot.queryParamMap.get('parentId')? this.route.snapshot.queryParamMap.get('parentId') : '';

    this.route.queryParams.subscribe(params => {
      this.items = [];
      if(params['parentId']) {
        this.parentId = params['parentId'];
        this.homeService.getOtherBooks({"parentId":this.parentId}).subscribe((res) => {
          res.forEach((books: any)=> {
            this.items.push(books);
          })
        })
      } else {
        this.items = []
        this.homeService.getMainBooks().subscribe((res)=>{
          console.log(res);
          res.forEach((books: any) => {
            this.items.push(books);
          });
        })
      }
    });
  }

  addBook() {
    this.router.navigate(['/editor'], {queryParams: {parentId: this.parentId}});
  }

}
