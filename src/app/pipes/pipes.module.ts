import { NgModule } from "@angular/core";
import { StatusLabelPipe } from "./status-label.pipe";

@NgModule({
    declarations: [
        StatusLabelPipe
    ],
    exports: [
        StatusLabelPipe
    ]
})
export class PipesModule {

}