import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IngredientService } from 'src/app/services/ingredient.service';
import { DataTablesModule } from 'angular-datatables';
import { Ingredient } from '../../models/ingredient';
import { Subject } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { TagPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public ingredients: Ingredient[] = [];
  public dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<void> = new Subject();
  date:any = new Date().toLocaleDateString();

  constructor(private ingrediantService: IngredientService, private router: Router) { 

  }

  pass(ingredient: Ingredient): void {
    console.log(ingredient);
    //$("#break").hide();
    //this.ingrediantService.getNewIngrediants(ingredient);
    // this.displayNewTables(ingredient);
    this.ingrediantService.getNewIngrediants(ingredient)
        .subscribe( data => {
          if(data != null){
            sessionStorage.setItem('ingredient', JSON.stringify(data));
           // this.router.navigateByUrl('/dashboard');
          }
          else{
             // this.message = "Wrong Credential"
             console.log("PROBLEM");
              }
        });
  }

  ngOnInit() {
    if(sessionStorage.getItem("user") == null){
      this.router.navigateByUrl('');
    }
    this.displayTables();
  }

  displayTables(){
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.ingrediantService.getIngredients().subscribe( data => {
      this.ingredients = data;
      this.dtTrigger.next();
     });
  }

  // displayNewTables(ingredient: Ingredient){
  //   this.dtOptions = {
  //     pagingType: 'full_numbers',
  //     pageLength: 10
  //   };
  //   this.ingrediantService.getNewIngredients().subscribe( data => {
  //     this.ingredients = data;
  //     this.dtTrigger.next();
  //    });
  // }
}
