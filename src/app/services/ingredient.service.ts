import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ingredient } from '../models/ingredient';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',"Access-Control-Allow-Origin":"*" })
};

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private userUrl = 'http://localhost:8080/rct/account';
  
  constructor(private http: HttpClient) { }

  public getIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(this.userUrl + "/ingredients");
  }

  public getNewIngrediants(ingredient: Ingredient) {
    console.log(ingredient);
    console.log(this.userUrl + "/1");
    return this.http.post<Ingredient>("http://localhost:8080/rct/account/1" , ingredient);
  }

}
