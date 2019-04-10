import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { UserNamePassword } from '../models/user-name-password';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',"Access-Control-Allow-Origin":"*" })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://localhost:8080/rct/users';

  constructor(private http: HttpClient) {}

  public registerUser(user) {
    return this.http.post<User>(this.userUrl + "/register", user);
  }

  public login(user){
    console.log(user);
    return this.http.post<UserNamePassword>(this.userUrl + "/login", user);
  }

}
