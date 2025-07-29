import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-success',
  standalone: false,
  templateUrl: './success.page.html',
  styleUrl: './success.page.css'
})
export class SuccessPage {
  constructor(private router: Router,private title: Title) { }
 goTo(route: string) {
    this.router.navigate([route])
  }
}
