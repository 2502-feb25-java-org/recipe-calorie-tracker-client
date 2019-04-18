import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IngredientService } from 'src/app/services/ingredient.service';
import { DataTablesModule } from 'angular-datatables';
import { Ingredient } from '../../models/ingredient';
import {Food } from '../../models/food';
import { Subject } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { FoodService } from 'src/app/services/food.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public breakfastIngredients: Ingredient[] = [];
  public lunchIngredients: Ingredient[] = [];
  public dinnerIngredients: Ingredient[] = [];
  public dtOptionsBreakfastIngredients: DataTables.Settings = {};
  public dtOptionsLunchIngredients: DataTables.Settings = {};
  public dtOptionsDinnerIngredients: DataTables.Settings = {};
  public dtOptionsBreakfastFoods: DataTables.Settings = {};
  public dtOptionsLunchFoods: DataTables.Settings = {};
  public dtOptionsDinnerFoods: DataTables.Settings = {};
  public dtTriggerBreakfastIngredients: Subject<void> = null;
  public dtTriggerLunchIngredients: Subject<void> = null;
  public dtTriggerDinnerIngredients: Subject<void> = null;
  public dtTriggerBreakfastFoods: Subject<void> = null;
  public dtTriggerLunchFoods: Subject<void> = null;
  public dtTriggerDinnerFoods: Subject<void> = null;

  public date:any = new Date().toLocaleDateString();

  public maxCalories: number = 2000;

  public breakfastSelectedIngredient: Ingredient = null;
  public breakfastSelectedFood: Food = null;
  public breakfastFoods: Food[] = null;

  public lunchSelectedIngredient: Ingredient = null;
  public lunchSelectedFood: Food = null;
  public lunchFoods: Food[] = null;

  public dinnerSelectedIngredient: Ingredient = null;
  public dinnerSelectedFood: Food = null;
  public dinnerFoods: Food[] = null;

  constructor(
    private _ingredientService: IngredientService,
    private _foodService: FoodService,
    private _router: Router) { 
  }

  ngOnInit() {
    if(sessionStorage.getItem("user") == null){
      this._router.navigateByUrl('');
    }

    this.dtOptionsBreakfastIngredients = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this.dtOptionsLunchIngredients = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this.dtOptionsDinnerIngredients = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this.dtOptionsBreakfastFoods = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this.dtOptionsLunchFoods = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this.dtOptionsDinnerFoods = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    
    this._displayBreakfastIngredientsTable();
    this._displayLunchIngredientsTable();
    this._displayDinnerIngredientsTable();
  }
 public viewGraph(){
   this._router.navigateByUrl("/graph");
 }
  private _displayBreakfastFoodsTable() {
    this.dtTriggerBreakfastFoods = new Subject();

    if (this.breakfastSelectedIngredient) {
       this._foodService.getFoods(this.breakfastSelectedIngredient.ingredientName).subscribe( data => {
         this.breakfastFoods = data;
         this.dtTriggerBreakfastFoods.next();
       });
    }
  }

  private _displayLunchFoodsTable() {
    this.dtTriggerLunchFoods = new Subject();

    if (this.lunchSelectedIngredient) {
       this._foodService.getFoods(this.lunchSelectedIngredient.ingredientName).subscribe( data => {
         this.lunchFoods = data;
         this.dtTriggerLunchFoods.next();
       });
    }
  }

  private _displayDinnerFoodsTable() {
    this.dtTriggerDinnerFoods = new Subject();

    if (this.dinnerSelectedIngredient) {
       this._foodService.getFoods(this.dinnerSelectedIngredient.ingredientName).subscribe( data => {
         this.dinnerFoods = data;
         this.dtTriggerDinnerFoods.next();
       });
    }
  }

  private _displayBreakfastIngredientsTable() {
    this.dtTriggerBreakfastIngredients = new Subject();

    if (!this.breakfastIngredients || this.breakfastIngredients.length == 0) {
      this._ingredientService.getIngredients().subscribe( data => {
        this.breakfastIngredients = data;
        setTimeout(x => this.dtTriggerBreakfastIngredients.next());
      });
    }
    else {
      setTimeout(x => this.dtTriggerBreakfastIngredients.next());
    }
  }

  private _displayLunchIngredientsTable() {
    this.dtTriggerLunchIngredients = new Subject();

    if (!this.lunchIngredients || this.lunchIngredients.length == 0) {
      this._ingredientService.getIngredients().subscribe( data => {
        this.lunchIngredients = data;
        setTimeout(x => this.dtTriggerLunchIngredients.next());
      });
    }
    else {
      setTimeout(x => this.dtTriggerLunchIngredients.next());
    }
  }

  private _displayDinnerIngredientsTable() {
    this.dtTriggerDinnerIngredients = new Subject();

    if (!this.dinnerIngredients || this.dinnerIngredients.length == 0) {
      this._ingredientService.getIngredients().subscribe( data => {
        this.dinnerIngredients = data;
        setTimeout(x => this.dtTriggerDinnerIngredients.next());
      });
    }
    else {
      setTimeout(x => this.dtTriggerDinnerIngredients.next());
    }
  }

  public getTotalCalories(): number {
    let result = 0;
    if (this.breakfastSelectedFood && this.breakfastSelectedFood.calories) {
      result += this.breakfastSelectedFood.calories;
    }
    if (this.lunchSelectedFood && this.lunchSelectedFood.calories) {
      result += this.lunchSelectedFood.calories;
    }
    if (this.dinnerSelectedFood && this.dinnerSelectedFood.calories) {
      result += this.dinnerSelectedFood.calories;
    }
    return result;
  }

  public getRemainingCalories(): number {
    return this.maxCalories - this.getTotalCalories();
  }

  public onBreakfastSelectedFoodReset() {
    this.breakfastSelectedFood = null;
  }

  public onBreakfastIngredientSelect(ingredient: Ingredient) {
    this.breakfastSelectedIngredient = ingredient;
    if (ingredient) {
      this._displayBreakfastFoodsTable();
    }
    else {
      this._displayBreakfastIngredientsTable();
    }
  }

  public onBreakfastFoodSelect(food: Food) {
    //console.log(food);
    this.breakfastSelectedFood = food;
  }

  public onLunchSelectedFoodReset() {
    this.lunchSelectedFood = null;
  }

  public onLunchIngredientSelect(ingredient: Ingredient) {
    this.lunchSelectedIngredient = ingredient;
    if (ingredient) {
      this._displayLunchFoodsTable();
    }
    else {
      this._displayLunchIngredientsTable();
    }
  }

  public onLunchFoodSelect(food: Food) {
    //console.log(food);
    this.lunchSelectedFood = food;
  }

    public onDinnerSelectedFoodReset() {
    this.dinnerSelectedFood = null;
  }

  public onDinnerIngredientSelect(ingredient: Ingredient) {
    this.dinnerSelectedIngredient = ingredient;
    if (ingredient) {
      this._displayDinnerFoodsTable();
    }
    else {
      this._displayDinnerIngredientsTable();
    }
  }

  public onDinnerFoodSelect(food: Food) {
    //console.log(food);
    this.dinnerSelectedFood = food;
  }
}
