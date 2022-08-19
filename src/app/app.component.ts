import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  result: any = [];

  ngOnInit(): void {

  }

  displaydata() {
    this.result = this.arrs;
  }

  title = 'ass-1-array';

  arrs = [{
    "id": 1,
    "first_name": "Kellie",
    "last_name": "Hales",
    "email": "khales0@clickbank.net",
    "gender": "Female",
    "wealth": 1392712
  }, {
    "id": 2,
    "first_name": "Sargent",
    "last_name": "Hawken",
    "email": "shawken1@phoca.cz",
    "gender": "Male",
    "wealth": 5526470
  }, {
    "id": 3,
    "first_name": "Emmanuel",
    "last_name": "Gertz",
    "email": "egertz2@tinypic.com",
    "gender": "Male",
    "wealth": 3963981
  }, {
    "id": 4,
    "first_name": "Gui",
    "last_name": "Farnill",
    "email": "gfarnill3@ocn.ne.jp",
    "gender": "Agender",
    "wealth": 2761092
  }, {
    "id": 5,
    "first_name": "Fee",
    "last_name": "Leigh",
    "email": "fleigh4@telegraph.co.uk",
    "gender": "Male",
    "wealth": 1127429
  }, {
    "id": 6,
    "first_name": "Eduino",
    "last_name": "Tomasz",
    "email": "etomasz5@vistaprint.com",
    "gender": "Male",
    "wealth": 665198
  }, {
    "id": 7,
    "first_name": "Andria",
    "last_name": "Petley",
    "email": "apetley6@wikia.com",
    "gender": "Female",
    "wealth": 7612223
  }, {
    "id": 8,
    "first_name": "Gamaliel",
    "last_name": "Littlefield",
    "email": "glittlefield7@sciencedaily.com",
    "gender": "Male",
    "wealth": 5729549
  }, {
    "id": 9,
    "first_name": "Quintana",
    "last_name": "Fidoe",
    "email": "qfidoe8@spiegel.de",
    "gender": "Female",
    "wealth": 864577
  }, {
    "id": 10,
    "first_name": "Bertine",
    "last_name": "Yoodall",
    "email": "byoodall9@wsj.com",
    "gender": "Female",
    "wealth": 2581295
  }];

  double() {
    this.display = false;
    const reswealth = this.arrs.map(twisewealth);
    function twisewealth(item: any) {
      item.wealth = item.wealth * 2;
      return (item);
    }
    this.result = reswealth;
  }

  show() {
    this.result = [];
    this.display = false;
    const resshow = this.arrs.filter(showwealth);
    function showwealth(item: any) {
      if (item.wealth >= 1000000) {
        return item;
      }
    }
    this.result = resshow;
  }

  sort() {
    this.result = [];
    this.display = false;
    const ressort = this.arrs.sort(function (a, b) { return b.wealth - a.wealth });
    this.result = ressort;
  }
  
  restotal: any;
  display: boolean = false;
  total() {
    this.display = true;
    this.result = this.arrs;
    const total = this.arrs.reduce((sum, item) => sum + item.wealth, 0)
    this.restotal = total;
  }

}
