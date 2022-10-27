import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[miDirectivaPersonalizada]',
})
export class ErrorMsgDirective implements OnInit, OnChanges {
  htmlElement: ElementRef<HTMLElement>;
  @Input() color: string = 'red';
  @Input() mensaje: string = 'campo necesario';

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnInit(): void {
    console.log('directiva oninit');
    this.htmlElement.nativeElement.style.color = this.color;
    this.htmlElement.nativeElement.innerText = this.mensaje;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['mensaje']) {
      const mensaje = changes['mensaje'].currentValue;
      this.htmlElement.nativeElement.innerText = this.mensaje;
    }
    if(changes['color']){
      const color = changes['color'].currentValue;
      this.htmlElement.nativeElement.style.color = this.color;
    }
  }
}
