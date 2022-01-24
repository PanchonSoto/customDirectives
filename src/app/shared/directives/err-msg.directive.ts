import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[errorMsg]'
})
export class ErrMsgDirective implements OnInit {

  htmlElement: ElementRef<HTMLElement>;
  @Input() color: string = 'red';
  @Input() mensaje: string = 'Debe de ingresar este campo';

  constructor(private el: ElementRef<HTMLElement>) { 
    this.htmlElement = el;
  }

  ngOnInit(): void {
    this.setColor();
    this.setMensaje();
  }

  setColor() {
    this.htmlElement.nativeElement.style.color = this.color;
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setMensaje(){
    this.htmlElement.nativeElement.innerText = this.mensaje;
  }

}
