import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientIdService } from '../../services/clienteIdService';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  clientId: string | null = null;

  constructor(private router:Router, private clientService: ClientIdService){}

  ngOnInit(): void {
      this.clientService.clientId$.subscribe(clientId => {
        this.clientId = clientId;
      })
  }

  navigateToHome(){
    this.router.navigate(['/', this.clientId])
  }
}
