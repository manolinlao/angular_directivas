import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[miDirectivaPersonalizada]',
})
export class ErrorMsgDirective {
  htmlElement: ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _mensaje: string = '';

  @Input() set color(valor: string) {
    this.htmlElement.nativeElement.style.color = valor;
    this._color = valor;
  }
  @Input() set mensaje(valor: string) {
    this.htmlElement.nativeElement.innerText = valor;
    this._mensaje = valor;
  }
  @Input() set valido(valor: boolean) {
    if (valor) {
      this.htmlElement.nativeElement.classList.add('oculta');
    } else {
      this.htmlElement.nativeElement.classList.remove('oculta');
    }
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnInit(): void {
    this.htmlElement.nativeElement.style.color = this._color;
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }
}
