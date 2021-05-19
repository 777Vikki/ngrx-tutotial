import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { CounterButtonsComponent } from "./counter-buttons/counter-buttons.component";
import { CounterOutputComponent } from "./counter-output/counter-output.component";
import { CounterRoutingModule } from "./counter-routing.module";
import { CounterComponent } from "./counter/counter.component";
import { CustomCounterInputComponent } from "./custom-counter-input/custom-counter-input.component";

@NgModule({
    declarations: [
        CounterComponent,
        CounterOutputComponent,
        CounterButtonsComponent,
        CustomCounterInputComponent,
    ],
    imports: [
        CommonModule,
        CounterRoutingModule,
        FormsModule
    ]
})

export class CounterModule {

 }