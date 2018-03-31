export class ContactsService{
	private contacts: {title: string , Num: number,group: string}[] = [];

	addContact(contact: {title: string, Num: number,group: string}){
	this.contacts.push(contact);
	}

	getContacts(){
	return this.contacts.slice();
	}
}