import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-property-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.css'
})
export class PropertyBindingComponent {
   username: string = "Shubham";
   age: number = 24;
   date : Date = new Date();
   country: string = "India";
   inputText: string = "Enter your Name";
   color: string = "Brown";

  welcomeMessgae(){
    alert("Welcome Shubham")
   }
}
