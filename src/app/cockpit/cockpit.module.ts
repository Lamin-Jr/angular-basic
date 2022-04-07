import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CockpitComponent } from "./cockpit.component";

@NgModule({
    imports: [ReactiveFormsModule],
    exports: [CockpitComponent],
    declarations: [CockpitComponent]
})

export class CockPitModule {}