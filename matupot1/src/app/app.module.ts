import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FoodPage} from '../pages/food/food';
import {BmiPage} from '../pages/bmi/bmi';
import { BmrPage} from '../pages/bmr/bmr';
import {TdeePage } from '../pages/tdee/tdee';
import { BeverageServiceProvider } from '../providers/beverage-service/beverage-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FoodPage,
    BmiPage,
    BmrPage,
    TdeePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FoodPage,
    BmiPage,
    BmrPage,
    TdeePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BeverageServiceProvider
  ]
})
export class AppModule {}
