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
    <ng-template cdk-connected-overlay [open]="isOpen" [width]="width" [height]="height"
                 [cdkConnectedOverlayOrigin]="triggerOverride || trigger"
                 [hasBackdrop]="hasBackdrop" backdropClass="mat-test-class"
                 (backdropClick)="backdropClickHandler($event)" [offsetX]="offsetX" [offsetY]="offsetY"
                 (positionChange)="positionChangeHandler($event)" (attach)="attachHandler()"
                 (detach)="detachHandler()" [minWidth]="minWidth" [minHeight]="minHeight"
                 [cdkConnectedOverlayPositions]="positionOverrides">
      <p>Menu content</p>
    </ng-template>
    
    <ng-template [open]="isOpen" [width]="width" [height]="height"
                 [cdkConnectedOverlayOrigin]="triggerOverride || trigger"
                 [hasBackdrop]="hasBackdrop" backdropClass="mat-test-class"
                 (backdropClick)="backdropClickHandler($event)" [offsetX]="offsetX" [offsetY]="offsetY"
                 (positionChange)="positionChangeHandler($event)" (attach)="attachHandler()"
                 (detach)="detachHandler()" [minWidth]="minWidth" [minHeight]="minHeight"
                 [cdkConnectedOverlayPositions]="positionOverrides">
      <p>Menu content</p>
    </ng-template>
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
export class TestComponent {
  isOpen: boolean;
}
