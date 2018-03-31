import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactsService } from '../../services/contacts.service';

/**
 * Generated class for the AddcontactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addcontact',
  templateUrl: 'addcontact.html',
})
export class AddcontactPage {

  constructor(public navCtrl: NavController,private contactsService: ContactsService){ }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddcontactPage');
  }

  onAddContact(value:{title:string,Num:number,group:string}){
  	this.contactsService.addContact(value);
  	this.navCtrl.pop();
  }
}
