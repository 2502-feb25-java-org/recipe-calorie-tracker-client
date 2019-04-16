import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Food } from '../models/food';
import { Ingredient } from '../models/ingredient';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private userUrl = 'http://localhost:8080/rct/account/food';
  
  constructor(private http: HttpClient) { }

  public getFoods(ingredientName: string): Observable<Food[]> {
    return this.http.get<Food[]>(this.userUrl + "/" + ingredientName);
  }
}