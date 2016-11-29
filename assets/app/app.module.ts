import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { BoardComponent } from "./countdown-stage/board.component";
import { DisplayComponent } from "./countdown-stage/display.component";

@NgModule({
    declarations: [
        AppComponent,
        BoardComponent,
        DisplayComponent
    ],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}