import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the BmiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bmi',
  templateUrl: 'bmi.html',
})
export class BmiPage {

  //bmiForm:any;

  //constructor(public navCtrl: NavController, public navParams: NavParams ) {
  //}

  //ionViewDidLoad() {
  //  console.log('ionViewDidLoad BmiPage');
 // }

  weight: number
  height: number 
  bmi: number

  constructor(public navCtrl: NavController) {

  }

  calBmi() {
    // alert("test: " + this.weight + " " + this.height)
    this.bmi = this.weight / ((this.height / 100) * (this.height / 100))
    // alert(this.bmi)
    //if(this.bmi<=18){
     // console.log("vvvv")
    //}
   }

}

   
 


  


