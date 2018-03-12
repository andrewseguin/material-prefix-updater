import {Component} from '@angular/core';

@Component({
  selector: 'md-app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}

@Component({
  selector: 'md-test-component',
  template: `
    <span>This is a test</span>
    <mat-slide-toggle>Test</mat-slide-toggle>
  `,
  styles: [
    `
      mat-checkbox {
        font-weight: bold;
      }
    `,
    `
      button[mat-button] {
        text-transform: none;
      }
    `
  ]
})
export class TestComponent {}
