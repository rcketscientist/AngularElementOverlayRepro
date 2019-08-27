import { Component, Inject } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    public dialog: MatDialog,
    public overlay: OverlayContainer
    ) {}

  openDialog() {
    const dialogRef = this.dialog.open(ExampleOverlay, {
      width: '250px'
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  template: `
  <example-element></example-element>
  `
})
export class ExampleOverlay {

  constructor(
    public dialogRef: MatDialogRef<ExampleOverlay>,
    public overlay: OverlayContainer) {}
}
