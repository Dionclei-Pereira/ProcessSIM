import { NgModule } from "@angular/core";
import { ProcessSpecComponent } from './process-spec/process-spec.component';
import { ProcessListComponent } from './process-list/process-list.component';
import { OsConfigComponent } from './os-config/os-config.component';

@NgModule({
    declarations: [
      ProcessSpecComponent,
      ProcessListComponent,
      OsConfigComponent
  ],
    imports: [],
    exports: [
      ProcessSpecComponent,
      ProcessListComponent,
      OsConfigComponent
    ]
})
export class ComponentsModule {

}