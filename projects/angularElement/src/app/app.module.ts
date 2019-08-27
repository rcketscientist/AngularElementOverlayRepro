import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { NgModule, Injector, ApplicationRef, Input, Component } from '@angular/core';

import { ExampleComponent } from './example/example.component';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayContainer } from '@angular/cdk/overlay';

export let OVERLAY_CONTAINER: OverlayContainer;
@Component({
  selector: 'example-loader',
  template: `<div #overlayLoader></div>`,
})
export class OverlayLoader {
  @Input() set overlay(overlay: OverlayContainer) { OVERLAY_CONTAINER = overlay; }
}

@NgModule({
  declarations: [
    ExampleComponent,
    OverlayLoader
  ],
  entryComponents: [
    ExampleComponent,
    OverlayLoader
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
    customElements.define('example-loader', createCustomElement(OverlayLoader, { injector: this.injector }));
  }
}
