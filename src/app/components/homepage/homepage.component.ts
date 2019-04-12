import { Component, OnInit } from '@angular/core';
import { IngredientService } from 'src/app/services/ingredient.service';
import { DataTablesModule } from 'angular-datatables';
import { Ingredient } from '../../models/ingredient';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public ingredients: Ingredient[] = [];
  public dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<void> = new Subject();

  constructor(private _service: IngredientService) {
  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this._service.getIngredients().subscribe( data => {
      this.ingredients = data;
      this.dtTrigger.next();
      //console.log(this.ingredients);
      //let ingredients = JSON.parse(data);
      //console.log(ingredients);
      //console.log(data);
      //let obj = JSON.stringify;
      //console.log(obj);
      //console.log(obj[0]);
     });
  }

}
