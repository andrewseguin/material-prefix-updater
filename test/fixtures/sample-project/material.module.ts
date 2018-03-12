import {NgModule} from '@angular/core';
import {SlideToggleCustom} from './re-export';
import {MatCheckboxModule, MatSidenavModule} from '@angular/material';

// Alternative and uncommon way of importing Angular Material in a project.
import * as md from '@angular/material';

@NgModule({
  exports: [
    SlideToggleCustom,
    MatCheckboxModule,
    MatSidenavModule,

    md.MatSelectModule,
    md.MatListModule
  ]
})
export class MyAppMaterialModule {}
