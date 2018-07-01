import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SignalRService } from "src/core/services/signal-r.service";
import { GameSignalRService } from "src/core/services/game-signal-r.service";
import { SecretNumberStateComponent } from './components/game/secret-number-state/secret-number-state.component';
import { GameStateComponent } from './components/game/game-state/game-state.component';

@NgModule({
  declarations: [
    AppComponent,
    SecretNumberStateComponent,
    GameStateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [SignalRService, GameSignalRService],
  bootstrap: [AppComponent]
})
export class AppModule { }
