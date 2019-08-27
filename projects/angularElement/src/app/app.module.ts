import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { NgModule, Injector } from '@angular/core';

import { ExampleComponent } from './example/example.component';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayContainer } from '@angular/cdk/overlay';
import { AppOverlayContainer } from './app.overlay.container';

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
  providers: [
    { provide: OverlayContainer, useClass: AppOverlayContainer },
  ]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    customElements.define('example-element', createCustomElement(ExampleComponent, { injector: this.injector }));
  }
}
