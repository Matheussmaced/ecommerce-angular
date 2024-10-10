import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductService } from '../../services/product.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buttons-sizes',
  templateUrl: './buttons-sizes.component.html',
  styleUrl: './buttons-sizes.component.css'
})
export class ButtonsSizesComponent implements OnInit {
  @Input() nameImage:string = ""
  @Input() productName:string = ""
  @Input() value:string = ""

  @Input() button1:string = ""
  @Input() button2:string = ""
  @Input() button3:string = ""
  @Input() button4:string = ""

  @Output() buy = new EventEmitter<any>()

  size:string = ""
  clientId: string | null = null;

  constructor(private productService: ProductService, private route: ActivatedRoute){}

  ngOnInit() {
    this.clientId = this.route.snapshot.paramMap.get('clientId');
  }

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
      this.productService.addingProductCart(productDetails, this.clientId);
    } else {
      alert('Por favor, selecione um tamanho.');
    }
  }
}
