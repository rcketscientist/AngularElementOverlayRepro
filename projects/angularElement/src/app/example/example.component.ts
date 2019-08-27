import { Component, OnInit, Input, Injector, AfterViewInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { OVERLAY_CONTAINER } from '../app.module';

export const OverlayFactory = () => {
  return OVERLAY_CONTAINER;
};

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
  providers: [
    {
      provide: OverlayContainer,
      useFactory: OverlayFactory,
    }
  ]
})
export class ExampleComponent { //} implements OnInit, AfterViewInit {
  constructor(private injector: Injector) {
    if (!OVERLAY_CONTAINER) {
      console.error('Overlay container is not avaialable at construction.');
    } else {
      console.log(JSON.stringify(OVERLAY_CONTAINER));
    }
  }

  // ngOnInit() {
  //   const overlay = this.injector.get(OverlayContainer);
  //   console.log(JSON.stringify(overlay));
  // }

  // ngAfterViewInit(): void {
  //   const overlay = this.injector.get(OverlayContainer);
  //   console.log(JSON.stringify(overlay));
  // }

}
