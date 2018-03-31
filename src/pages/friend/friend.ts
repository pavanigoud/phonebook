import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactsService } from '../../services/contacts.service';


/**
 * Generated class for the FriendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-friend',
  templateUrl: 'friend.html',
})
export class FriendPage {

contacts: {title: string , Num: number,group: string}[] = [];

  constructor(public navCtrl: NavController, private contactsService: ContactsService) {
  }

   ionViewWillEnter(){
  	this.contacts = this.contactsService.getContacts();
  }
}
