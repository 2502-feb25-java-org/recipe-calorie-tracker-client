import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit {

  user:User = new User();

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  registerUser(): void {
    this.userService.registerUser(this.user)
        .subscribe( data => {
          alert("User created successfully.");
        });

  };

}
