import { NgModule } from "@angular/core";
import { StatusLabelPipe } from "./status-label.pipe";
import { PidLabelPipe } from "./pid-label.pipe";
import { TypeLabelPipe } from "./type-label.pipe";

@NgModule({
    declarations: [
        StatusLabelPipe,
        PidLabelPipe,
        TypeLabelPipe
    ],
    exports: [
        StatusLabelPipe,
        PidLabelPipe,
        TypeLabelPipe
    ]
})
export class PipesModule {

}