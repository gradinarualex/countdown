import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { BoardComponent } from "./countdown-stage/board.component";
import { DisplayComponent } from "./countdown-stage/display.component";
import { ButtonComponent } from "./countdown-stage/button.component";
import { ClockComponent } from "./countdown-stage/clock.component";
import { TitleComponent } from "./countdown-stage/title.component";

@NgModule({
    declarations: [
        AppComponent,
        BoardComponent,
        DisplayComponent,
        ButtonComponent,
        ClockComponent,
        TitleComponent
    ],
    imports: [BrowserModule, HttpModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}