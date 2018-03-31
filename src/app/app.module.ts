import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { SigninPage } from '../pages/signin/signin';
import { Contacts } from "@ionic-native/contacts";
import { AddcontactPage } from '../pages/addcontact/addcontact';
import { FriendPage } from '../pages/friend/friend';
import { FamilyPage } from '../pages/family/family';
import { ContactsService } from '../services/contacts.service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    SigninPage,
    AddcontactPage,
    FriendPage,
    FamilyPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    SigninPage,
    AddcontactPage,
    FriendPage,
    FamilyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ContactsService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
