import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-nav-bar',
  template: `
    <button (click)="navigate()">{{ nameButton }}</button>
  `,
  styleUrl: './button-nav-bar.component.css'
})
export class ButtonNavBarComponent {
  @Input() nameRouter:string = ""
  @Input() nameButton:string = ""

  constructor(private router: Router){}

  navigate() {
    this.router.navigate([this.nameRouter])
  }

}
