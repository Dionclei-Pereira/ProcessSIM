import { NgModule } from "@angular/core";
import { ProcessSpecComponent } from './process-spec/process-spec.component';
import { ProcessListComponent } from './process-list/process-list.component';
import { OsConfigComponent } from './os-config/os-config.component';
import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { PipesModule } from "../pipes/pipes.module";
import { ProcessComponent } from './process/process.component';
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
      ProcessSpecComponent,
      ProcessListComponent,
      OsConfigComponent,
      ProcessComponent
  ],
    imports: [
      AngularMaterialModule,
      FormsModule,
      PipesModule
    ],
    exports: [
      ProcessSpecComponent,
      ProcessListComponent,
      OsConfigComponent,
      ProcessComponent
    ]
})
export class ComponentsModule {

}