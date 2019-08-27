import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent, ExampleOverlay } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { OverlayContainer } from '@angular/cdk/overlay';
import { AppOverlayContainer } from './app.overlay.container';


@NgModule({
  declarations: [
    AppComponent,
    ExampleOverlay
  ],
  entryComponents: [
    ExampleOverlay
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [
    { provide: OverlayContainer, useClass: AppOverlayContainer },
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
