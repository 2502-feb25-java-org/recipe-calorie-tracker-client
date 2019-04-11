import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  time: number = 5;
  interval;
  message:string;
  constructor(private router: Router) {
    
  }

  ngOnInit() {
    sessionStorage.removeItem("user");
    sessionStorage.clear();
    localStorage.clear();
    this.interval = setInterval(() => {
      this.time--;
      if(this.time == 0)
        this.router.navigateByUrl(''); 
    },1000);
  }
}



