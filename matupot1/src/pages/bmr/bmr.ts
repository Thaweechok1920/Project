import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BmrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bmr',
  templateUrl: 'bmr.html',
})
export class BmrPage {

  weight: number
  height: number 
  age:number
  bmrx: number
  bmry: number
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BmrPage');
  }

  calBmrx() {
    // alert("test: " + this.weight + " " + this.height)
    this.bmrx = 66+(13.7*this.weight) + (5*this.height) - (6.8*this.age )
    // alert(this.bmi)
    //if(this.bmi<=18){
     // console.log("vvvv")
    //}
   }
   calBmry() {
    // alert("test: " + this.weight + " " + this.height)
    this.bmry = 665+(9.6*this.weight) + (1.8*this.height) - (4.7*this.age )
    // alert(this.bmi)
    //if(this.bmi<=18){
     // console.log("vvvv")
    //}
   }


 
  }

