import { CommonModule, DatePipe, JsonPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  standalone: true,
  imports: [CommonModule, UpperCasePipe, LowerCasePipe, JsonPipe, DatePipe],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent implements OnInit {
  msg: string = 'hello'
  date : Date = new Date();
  constructor(){}
 cityList : string[]= ["cuttack","bbsr","bam","puri"]
 Student : any = [
  {name: "shubham", class : "8th", section: "c"},
  {name: "sagar", class : "7th", section: "a"},
  {name: "shyam", class : "8th", section: "b"},
  {name: "slok", class : "6th", section: "c"},
  {name: "sony", class : "10th", section: "d"}
 ]
 ngOnInit(): void {
     console.log(this.Student);
 }
}
