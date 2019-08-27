import { OverlayContainer } from '@angular/cdk/overlay';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export class AppOverlayContainer extends OverlayContainer {
    constructor(@Inject(DOCUMENT) _document: any) {
        super(_document);
    }

  _createContainer(): void {
    const containerClass = 'cdk-overlay-container';

    const container = this._document.createElement('div');
    container.classList.add(containerClass);
    this._document.body.appendChild(container);
    this._containerElement = container;
  }
}
