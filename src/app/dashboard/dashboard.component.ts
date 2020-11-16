import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }
   addItem(){
     this.router.navigate(['/add']);
   }
   editItem(){
    this.router.navigate(['/edit']);
  }
  viewItem(){
    this.router.navigate(['/view']);
  }
  deleteItem(){
    this.router.navigate(['/delete']);
  }
  private logout(){
    this.router.navigate(['/login'])
  }
}
