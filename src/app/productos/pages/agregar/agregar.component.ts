import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
  });

  textoMensaje: string = 'hola mundo';
  color: string = 'pink';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  tieneError(campo: string) {
    const error = this.miFormulario.get(campo)?.invalid || false;
    console.log('tieneError', error);
    return error;
  }

  cambiarTextoMensaje() {
    this.textoMensaje = 'hola mundo cambiado';
  }

  cambiarColorMensaje() {
    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );

    this.color = color;
  }
}
