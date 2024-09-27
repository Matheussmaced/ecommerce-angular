import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-buttons-sizes',
  templateUrl: './buttons-sizes.component.html',
  styleUrl: './buttons-sizes.component.css'
})
export class ButtonsSizesComponent {
  @Input() nameImage:string = ""
  @Input() productName:string = ""
  @Input() value:string = ""
  @Output() buy = new EventEmitter<any>()

  size:string = ""

  clickP(){
    this.size = "P"
  }
  clickM(){
    this.size = "M"
  }
  clickG(){
    this.size = "G"
  }
  clickGG(){
    this.size = "GG"
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
    } else {
      alert('Por favor, selecione um tamanho.');
    }
  }
}
