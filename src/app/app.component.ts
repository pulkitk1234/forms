import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tdf';
  topics=['Angular','React','Vue'];
  // first= "heyy";
  

  userModel= new User('','abc@com',334455,'','morning',true);
}
