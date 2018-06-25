import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignalRService } from "src/core/services/signal-r.service";
import { GameSignalRService } from "src/core/services/game-signal-r.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [SignalRService, GameSignalRService],
  bootstrap: [AppComponent]
})
export class AppModule { }
