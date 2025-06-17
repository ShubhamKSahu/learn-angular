import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-if',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.css'
})
export class NgIfComponent {
  isVisible : boolean = true;

  number1: string = '';
  number2: string = '';

  hideDiv(){
    this.isVisible = false;
  }
  showDiv(){
    this.isVisible = true;
  }
}

