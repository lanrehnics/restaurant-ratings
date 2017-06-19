import { Restaurant } from './../../interfaces/restaurant';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  restaurants: Restaurant[] = [
    { Id: 1, Name: 'Mezon del Cobre', Address: "This is the address" },
    { Id: 2, Name: 'Gentle Ben\'s', Address: "This is another Address" },
    { Id: 3, Name: 'The Golden Arches', Address: "One more address" },
    { Id: 4, Name: 'Bamboo Palace', Address: "This is the last address" }
  ];

  constructor(public navCtrl: NavController) {

  }

  viewDetails(restaurant: Restaurant) {
    this.navCtrl.push("RestaurantDetailPage", restaurant);
  }

  viewSearchPage() {
    this.navCtrl.push("RestaurantSearchPage");
  }

}
