import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent {
  userList : any[] = [];
  payload : any = {
  "CarId": 0,
  "Brand": "",
  "Model": "",
  "Year": 0,
  "Color": "",
  "DailyRate": 0,
  "CarImage": "",
  "RegNo": ""
}
  //http = Inject(HttpClient)
  constructor(private http: HttpClient){}
getUserList(){
  this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
    this.userList = res;
    console.log(this.userList);
  })
}

onSaveCar(){
  this.http.post("https://freeapi.miniprojectideas.com/api/CarRentalApp/CreateNewCar", this.payload)
  .subscribe((res:any) => {
    if(res.result){
      console.log("Car saved successfully");
      alert("Car saved")
    } else{
      console.log("Car saving failed");
    }
  })
}
}
