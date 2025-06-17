import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './Component/user/user.component';
import { AdminComponent } from './Component/admin/admin.component';
import { PropertyBindingComponent } from './Component/property-binding/property-binding.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { NgIfComponent } from './Component/ng-if/ng-if.component';
import { NgForComponent } from "./Component/ng-for/ng-for.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-app';
  constructor(){
    console.log("It is a constructor")
  }

  changeTitle() : void{
    this.title = "Changed First App"
  }
  ngOnInit(): void {
    //this.changeTitle()
  }
}
