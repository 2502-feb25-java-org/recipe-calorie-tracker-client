import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IngredientService } from 'src/app/services/ingredient.service';
import { DataTablesModule } from 'angular-datatables';
import { Ingredient } from '../../models/ingredient';
import { Subject } from 'rxjs';

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

  constructor(private _service: IngredientService, private router: Router) { 

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
    this._service.getIngredients().subscribe( data => {
      this.ingredients = data;
      this.dtTrigger.next();
     });
  }
}
