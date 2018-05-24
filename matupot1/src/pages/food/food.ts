import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FoodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-food',
  templateUrl: 'food.html',
})
export class FoodPage {
  weight: number
  height: number 
  age:number
  bmrx: number
  bmry: number
  tot:number
  foodx:number
  foody:number

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodPage');
  }
  
  calBmrx() {
    // alert("test: " + this.weight + " " + this.height)
    this.bmrx = 66+(13.7*this.weight) + (5*this.height) - (6.8*this.age )
    // alert(this.bmi)
    //if(this.bmi<=18){
     // console.log("vvvv")
    //}
    if(this.tot==1){
      this.foodx = 1.2*this.bmrx;
    }
    if(this.tot==2){
      this.foodx = 1.375*this.bmrx;
    }
    if(this.tot==3){
      this.foodx = 1.55*this.bmrx;
    }
    if(this.tot==4){
      this.foodx = 1.7*this.bmrx;
    }
    if(this.tot==5){
      this.foodx = 1.9*this.bmrx;
    }

   }

   calBmry() {
    // alert("test: " + this.weight + " " + this.height)
    this.bmry = 665+(9.6*this.weight) + (1.8*this.height) - (4.7*this.age )
    // alert(this.bmi)
    //if(this.bmi<=18){
     // console.log("vvvv")
    //}
    if(this.tot==1){
      this.foody = 1.2*this.bmry;
    }
    if(this.tot==2){
      this.foody = 1.375*this.bmry;
    }
    if(this.tot==3){
      this.foody = 1.55*this.bmry;
    }
    if(this.tot==4){
      this.foody = 1.7*this.bmry;
    }
    if(this.tot==5){
      this.foody = 1.9*this.bmry;
    }

   }

}
