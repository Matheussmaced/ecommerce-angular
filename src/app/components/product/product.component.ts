import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() nameImage:string = ""
  @Input() productName:string = ""
  @Input() value:string = ""

  mouseOverFunction(){
    console.log("Passou o mouse")
  }
}
