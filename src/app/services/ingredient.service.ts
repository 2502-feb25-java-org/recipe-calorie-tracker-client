import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ingredient } from '../models/ingredient';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private userUrl = 'http://localhost:8080/rct/account';
  
  constructor(private http: HttpClient) { }

  public getIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(this.userUrl + "/ingredients");
  }
}
