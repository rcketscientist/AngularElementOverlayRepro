import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { NgModule, Injector, ApplicationRef } from '@angular/core';

import { ExampleComponent } from './example/example.component';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    ExampleComponent
  ],
  entryComponents: [
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatTooltipModule
  ],
  providers: []
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
      customElements.define('example-element', createCustomElement(ExampleComponent, { injector: this.injector }));
  }
}
