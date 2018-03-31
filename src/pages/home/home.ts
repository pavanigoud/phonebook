import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { SigninPage } from '../signin/signin';
import { Contacts } from "@ionic-native/contacts";
import { AddcontactPage } from '../addcontact/addcontact';
import { ContactsService } from '../../services/contacts.service';
import { FriendPage } from '../friend/friend';
import { FamilyPage } from '../family/family';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	contacts: {title: string , Num: number,group: string}[] = [];
  constructor(public navCtrl: NavController,private contactsService: ContactsService) {
  }

  ionViewWillEnter(){
  	this.contacts = this.contactsService.getContacts();
  }
  load(){
  	this.navCtrl.push(AddcontactPage)
  }
   load1(){
    this.navCtrl.push(FriendPage)
   }

   load2(){
    this.navCtrl.push(FamilyPage)
   }
}
