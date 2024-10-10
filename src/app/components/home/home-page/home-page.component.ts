import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{

  constructor(private router:Router, private route: ActivatedRoute){}

  ngOnInit(): void {
      const clientId = this.route.snapshot.paramMap.get('cliendId');
      if(!clientId){
        this.router.navigate(['/', clientId]);
      }
  }
}
