import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  clientId: string | null = null;

  ngOnInit(): void {
      this.clientId = localStorage.getItem('clientId');
  }
}
