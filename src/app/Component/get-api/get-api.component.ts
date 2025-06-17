import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {
  userList: any[]= [];
  albumList: any[] =[];
 constructor(private http: HttpClient){}
  getUsers(){
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res: any)=>{
      this.userList = res;
    })
  }
  getAlbums(){
    this.http.get("https://jsonplaceholder.typicode.com/albums").subscribe((res: any)=>{
      this.albumList = res;
    })
  }
}
