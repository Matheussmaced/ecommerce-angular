import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductService } from '../../services/product.services';

@Component({
  selector: 'app-buttons-sizes',
  templateUrl: './buttons-sizes.component.html',
  styleUrl: './buttons-sizes.component.css'
})
export class ButtonsSizesComponent {
  @Input() nameImage:string = ""
  @Input() productName:string = ""
  @Input() value:string = ""

  @Input() button1:string = ""
  @Input() button2:string = ""
  @Input() button3:string = ""
  @Input() button4:string = ""

  @Output() buy = new EventEmitter<any>()

  size:string = ""

  constructor(private productService: ProductService){}

  clickButton1(){
    this.size = this.button1
  }
  clickButton2(){
    this.size = this.button2
  }
  clickButton3(){
    this.size = this.button3
  }
  clickButton4(){
    this.size = this.button4
  }

  finishBuy() {
    if (this.size) {
      const productDetails = {
        nameImage: this.nameImage,
        productName: this.productName,
        value: this.value,
        size: this.size
      };
      this.buy.emit(productDetails);
      this.productService.addingProductCart(productDetails);
    } else {
      alert('Por favor, selecione um tamanho.');
    }
  }
}
