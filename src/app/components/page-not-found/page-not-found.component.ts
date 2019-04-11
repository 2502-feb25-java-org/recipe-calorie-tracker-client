import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  time: number = 5;
  interval;
  message:string;
  constructor(private router:Router) { }

  ngOnInit() {
    this.interval = setInterval(() => {
      this.time--;
      if(this.time == 0)
        this.router.navigateByUrl(''); 
    },1000);
  }
}
