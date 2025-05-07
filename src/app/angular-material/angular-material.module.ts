import { NgModule } from "@angular/core";

import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';

@NgModule({
    imports: [
        MatTableModule,
        MatTabsModule,
        MatRadioModule,
        MatButtonModule,
        MatSliderModule
    ],
    exports: [
        MatTableModule,
        MatTabsModule,
        MatRadioModule,
        MatButtonModule,
        MatSliderModule
    ]
})
export class AngularMaterialModule {

}