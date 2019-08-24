import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(ExampleOverlay, {
      width: '250px'
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  template: `
  <div>TEST</div>
  <example-element></example-element>
  `
})
export class ExampleOverlay {

  constructor(
    public dialogRef: MatDialogRef<ExampleOverlay>) {}
}
