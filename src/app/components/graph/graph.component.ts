import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import 'rxjs/add/operator/map';
import { Chart } from 'chart.js';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  chart: [];
  hist = [];
  dates = [];
  newdates = [];
  constructor(private _http: HttpClient) { }
  
  ngOnInit() {
    
   this.getHistory().subscribe(res => {
     console.log(res);
     
     var size = Object.keys(res).length;
      for(let i=0; i<size; i++){
        let temp = res[i];
        this.hist.push(temp['totalCalories']);
        this.dates.push(temp['date']);
        //can add new arrys for dates
      }
  
      console.log(this.hist);
    
      this.dates.forEach(thing => {
        let jsdate = new Date(thing);
       this. newdates.push(jsdate.toLocaleDateString('en', {year: 'numeric', month: 'short', day: 'numeric'}))
        
      });
      console.log(this.newdates);
      
   })
  }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{
          display: true,
          ticks: {
              suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
              // OR //
              suggestedMax:3000   // minimum value will be 0.
          }
      }]
  }
  };
  public barChartLabels = this.newdates;
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: this.hist, label: 'Total calories for the day'}
  ];
  getHistory(){
    //let user = sessionStorage.getItem('user');
    let temp = JSON.parse(sessionStorage.getItem("user"));
      console.log(temp['id']);
    return this._http.get("http://localhost:8080/rct/account/history/"+ temp['id']);
  }
  
}

