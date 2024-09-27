import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() nameImage:string = ""
  @Input() productName:string = ""
  @Input() value:string = ""
  @Output() buy = new EventEmitter<any>()

  isEnableBlock:boolean = false

  activeDiv(){
    this.isEnableBlock = true
  }
  deactivateDiv(){
    this.isEnableBlock = false
  }

  onBuy(productDetails: any){
    console.log('Produto comprado', productDetails)
  }
}
