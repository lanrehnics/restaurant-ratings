import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RestaurantSearchPage } from './restaurant-search';

@NgModule({
  declarations: [
    RestaurantSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(RestaurantSearchPage),
  ],
  exports: [
    RestaurantSearchPage
  ]
})
export class RestaurantSearchPageModule {}
