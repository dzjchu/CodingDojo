import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration';
  user: User = new User();
  pw_confirm: string = "";
  submit_enable: boolean = false;

  STATES = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];

  onSubmit() {
    let msg = "";
    msg += "Thank you for registering with us " + this.user.firstName + ".";
    msg += "  ";
    msg += "We just sent you a confirmation email at " + this.user.email;
    msg += ", and we will send all mail to " + this.user.street;
    if( this.user.street2 ) {
      msg += " " + this.user.street2;
    }
    msg += " " + this.user.city + ", " + this.user.state;

    document.getElementById( "success_region" ).appendChild( document.createTextNode( msg ) );
    document.getElementById( "success_region" ).style.display = "block";
  }
}