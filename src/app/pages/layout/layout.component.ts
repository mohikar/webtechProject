import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  loggedUserData: any;

  router = Inject(Router)
  constructor(){
    const localData = localStorage.getItem('complaintUser');
    if(localData != null) {
      this.loggedUserData = JSON.parse(localData)
    }
  }
  onLogoff() {
    localStorage.removeItem('complaintUser');
    this.router.navigateByUrl('/login')
  }
}
