import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FoodPage } from '../food/food';
import {BmiPage } from '../bmi/bmi';
import {BmrPage} from '../bmr/bmr';
import {TdeePage} from '../tdee/tdee';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  food(){
    this.navCtrl.push(FoodPage)
  }

  bmi(){
    this.navCtrl.push(BmiPage)
  }

  bmr(){
    this.navCtrl.push(BmrPage)
  }
  tdee(){
    this.navCtrl.push(TdeePage)
  }
}
