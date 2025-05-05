import { NgModule } from "@angular/core";
import { StatusLabelPipe } from "./status-label.pipe";
import { PidLabelPipe } from "./pid-label.pipe";

@NgModule({
    declarations: [
        StatusLabelPipe,
        PidLabelPipe
    ],
    exports: [
        StatusLabelPipe,
        PidLabelPipe
    ]
})
export class PipesModule {

}