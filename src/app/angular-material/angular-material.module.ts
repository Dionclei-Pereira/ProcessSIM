import { NgModule } from "@angular/core";

import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    imports: [
        MatTableModule,
        MatTabsModule,
        MatRadioModule,
        MatButtonModule
    ],
    exports: [
        MatTableModule,
        MatTabsModule,
        MatRadioModule,
        MatButtonModule
    ]
})
export class AngularMaterialModule {

}