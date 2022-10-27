import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateSamplesModule } from './template-samples/template-samples.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, TemplateSamplesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
