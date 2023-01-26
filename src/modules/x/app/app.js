import { LightningElement } from 'lwc';

export default class App extends LightningElement {

  firstName = 'Web';
  lastName = 'Component';

    get uppercasedFullName() {
        const fullName = `${this.firstName} ${this.lastName}`;
        return fullName.trim().toUpperCase();
    }
}