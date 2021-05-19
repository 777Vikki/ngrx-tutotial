import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { EffectsModule } from "@ngrx/effects";
import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from './login/login.component';
import { AuthEffects } from './state/auth.effects';
@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule,
        EffectsModule.forFeature([AuthEffects]),
        ReactiveFormsModule
    ],
    declarations: [
      LoginComponent
    ]
})

export class AuthModule {}