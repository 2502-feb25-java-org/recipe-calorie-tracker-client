import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

    quotes: string[][] = [
    ["One cannot think well, love well, sleep well, if one has not dined well.",
    "Virginia Woolf"
    ],
    ["Ask not what you can do for your country. Ask what’s for lunch.",
    "Orson Welles"
    ],
    ["After a good dinner one can forgive anybody, even one's own relations.",
    "Oscar Wilde"
    ],
    ["Cakes are healthy too, you just eat a small slice.",
    "Mary Berry"
    ],
    ["Let food be thy medicine and medicine be thy food.",
    "Hippocrates"
    ],
    ["You are what you eat.",
    "Anthelme Brillat-Savarin"
    ],
    ["Food is not just eating energy. It's an experience.",
    "Guy Fieri"
    ],
    ["Nothing brings people together like good food.",
    "Camille Styles"
    ],
    ["No one is born a great cook, one learns by doing.",
    "Julia Child"
    ],
    ["Eat less sugar you're sweet enough already.",
    "Anonymous author"
    ]];
    rand = Math.floor(Math.random() * Math.floor(10));
    quote = this.quotes[this.rand][0];
    author = this.quotes[this.rand][1];

  constructor() {
  }
 
  ngOnInit() {
  }
}
