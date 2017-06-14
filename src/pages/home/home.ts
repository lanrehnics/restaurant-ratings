import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  restaurants = [
    { id: 1, name: 'Mezon del Cobre' },
    { id: 2, name: 'Gentle Ben\'s' },
    { id: 3, name: 'The Golden Arches' },
    { id: 3, name: 'Bamboo Palace' }
  ];

  constructor(public navCtrl: NavController) {

  }

  viewDetails(id:number) {
    alert(id);
  }
}
