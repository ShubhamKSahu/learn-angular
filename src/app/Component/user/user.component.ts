import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  myName: string = "Enter Your Name";
  myPassword: string = "enter your Password"

  change(){
    console.log("Subject Changed")
  }
}
