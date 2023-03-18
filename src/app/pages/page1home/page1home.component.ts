import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page1home',
  templateUrl: './page1home.component.html',
  styleUrls: ['./page1home.component.css']
})
export class Page1homeComponent {
  
  constructor(private router: Router) {}

goToPage2() {
    this.router.navigate(['/page2']);
  }
}
