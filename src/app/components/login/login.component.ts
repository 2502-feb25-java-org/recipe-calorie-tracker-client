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

  public user:UserNamePassword = new UserNamePassword();
  public message:string = "";

  constructor(private userService: UserService, private router: Router) { 
  

  }

  ngOnInit() {
  }

  submit(): void {
    this.message = null;
    this.userService.login(this.user)
        .subscribe( data => {
          if(data != null){
            sessionStorage.setItem('user', JSON.stringify(data));
            this.router.navigateByUrl('/dashboard');
          }
          else{
              this.message = "Login Failed";
              }
        });

  };

}
