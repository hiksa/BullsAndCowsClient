import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { SignalRService } from "src/core/services/signal-r.service";
import { GameSignalRService } from "src/core/services/game-signal-r.service";
import { SecretNumberStateComponent } from './components/game/secret-number-state/secret-number-state.component';
import { GameStateComponent } from './components/game/game-state/game-state.component';
import { JoinGameComponent } from './components/core/join-game/join-game.component';
import { CredentialsComponent } from './components/core/credentials/credentials.component';
import { WaitingScreenComponent } from './components/core/waiting-screen/waiting-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    SecretNumberStateComponent,
    GameStateComponent,
    JoinGameComponent,
    CredentialsComponent,
    WaitingScreenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [SignalRService, GameSignalRService],
  bootstrap: [AppComponent]
})
export class AppModule { }
