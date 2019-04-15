import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Food } from '../models/food';
import { Ingredient } from '../models/ingredient';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private userUrl = 'http://localhost:8080/rct/account/1';
  
  constructor(private http: HttpClient) { }

  public getFoods(ingredient: string): Observable<Food[]> {
    return this.http.get<Food[]>(this.userUrl + "/foods?q=" + ingredient);
  }

  public sendFood(ingredient: Ingredient): Observable<Food> {
    console.log(this.http.post<Food>(this.userUrl, ingredient.ingredientName));
    return this.http.post<Food>(this.userUrl, ingredient.ingredientName);
  }
}