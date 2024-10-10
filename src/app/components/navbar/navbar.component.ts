import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  clientId: string | null = null;

  constructor(private router:Router){}

  ngOnInit(): void {
      this.clientId = localStorage.getItem('clientId');
  }

  navigateToHome(){
    this.router.navigate(['/', this.clientId])
  }
}
