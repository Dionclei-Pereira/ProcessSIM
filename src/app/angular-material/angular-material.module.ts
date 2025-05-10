import { NgModule } from "@angular/core";

import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
    imports: [
        MatTableModule,
        MatTabsModule,
        MatRadioModule,
        MatButtonModule,
        MatSliderModule,
        MatSelectModule,
        MatInputModule,
        MatFormFieldModule
    ],
    exports: [
        MatTableModule,
        MatTabsModule,
        MatRadioModule,
        MatButtonModule,
        MatSliderModule,
        MatSelectModule,
        MatInputModule,
        MatFormFieldModule
    ]
})
export class AngularMaterialModule {

}