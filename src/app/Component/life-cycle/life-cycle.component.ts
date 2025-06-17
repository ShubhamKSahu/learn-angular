import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.css'
})
export class LifeCycleComponent implements OnInit, AfterViewInit,
 AfterViewChecked, AfterContentInit, AfterContentChecked, OnDestroy {
  ngOnInit(): void {
      console.log("ngOnInit")
  }
  ngAfterViewInit(): void {
      console.log("ngAfterViewInit", performance.now())
  }
  ngAfterViewChecked(): void {
      console.log("ngAfterViewChecked");
  }
  ngAfterContentInit(): void {
      console.log("ngAfterContentInit")
  }
  ngAfterContentChecked(): void {
      console.log("ngAfterContentChecked")
  }
  ngOnDestroy(): void {
    alert("You are leaving this page")
      console.log("ngOnDestroy")
  }
}
