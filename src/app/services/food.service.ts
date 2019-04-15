import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Food } from '../models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private userUrl = 'http://localhost:8080/rct/account';
  
  constructor(private http: HttpClient) { }

  public getFoods(ingredient: string): Observable<Food[]> {
    return this.http.get<Food[]>(this.userUrl + "/foods?q=" + ingredient);
  }
}