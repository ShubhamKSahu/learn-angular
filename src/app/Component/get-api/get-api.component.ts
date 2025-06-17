import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent implements OnInit, AfterViewInit{
  userList: any[]= [];
  albumList: any[] =[];
 constructor(private http: HttpClient){}
 ngOnInit(): void {
     this.getUsers();
 }
 ngAfterViewInit(): void {
     console.log("Ng after view init", performance.now())
 }
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
