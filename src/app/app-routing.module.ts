import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SamplesComponent } from './template-samples/samples/samples.component';

const routes: Routes = [
  {
    path: 'productos',
    loadChildren: () =>
      import('./productos/productos.module').then((m) => m.ProductosModule),
  },
  {
    path: 'samples',
    component: SamplesComponent,
  },
  {
    path: '**',
    redirectTo: 'samples',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
