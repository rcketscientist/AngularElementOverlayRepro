import { OverlayContainer } from '@angular/cdk/overlay';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export class AppOverlayContainer extends OverlayContainer {
    constructor(@Inject(DOCUMENT) _document: any) {
        super(_document);
    }

  _createContainer(): void {
    //   super._createContainer();
    const container = document.createElement('div');
    container.classList.add('app-overlay-container');

    document.querySelector('#content-container').appendChild(container);
    this._containerElement = container;
  }
}
