import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserNamePassword } from 'src/app/models/user-name-password';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:UserNamePassword = new UserNamePassword();
  message:string = "";

  constructor(private userService: UserService, private router: Router) { 
  
    console.log(sessionStorage.getItem("user"));
  }

  ngOnInit() {
  }

  submit(): void {
    this.userService.login(this.user)
        .subscribe( data => {
          if(data != null){
            let uu:string = JSON.stringify(data);
            sessionStorage.setItem('user', uu);
            this.router.navigateByUrl('/dashboard');
          }
          else{
              this.message = "Wrong Credential"
              }
        });

  };

}
