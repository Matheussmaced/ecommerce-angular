import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-login',
  templateUrl: './input-login.component.html',
  styleUrl: './input-login.component.css',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputLoginComponent),
    multi: true
  }]
})
export class InputLoginComponent implements ControlValueAccessor {
  @Input() typeButton:string = ""
  value:string = ""
  onChange: any = () => {};
  onTouched:any = () => {};

  // Escreve o valor no campo
  writeValue(value: string): void {
    this.value = value
  }
  // Registra a função que será chamada quando o valor mudar
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  // Método chamado quando o input é alterado
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
   // Método chamado quando o input é alterado
   onInputChange(event: Event){
    const value = (event.target as HTMLInputElement).value;
    this.value = value
    this.onChange(value) // Notifica o Angular sobre a mudança de valor
    this.onTouched() // Marca o campo como "tocado"
   }

}
