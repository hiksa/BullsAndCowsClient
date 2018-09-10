import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { SignalRService } from "src/core/services/signal-r.service";
import { GameSignalRService } from "src/core/services/game-signal-r.service";
import { SecretNumberComponent } from './components/game/secret-number/secret-number.component';
import { GameComponent } from './components/game/game/game.component';
import { JoinGameComponent } from './components/core/join-game/join-game.component';
import { CredentialsComponent } from './components/core/credentials/credentials.component';
import { WaitingOpponentComponent } from './components/core/waiting-opponent/waiting-opponent.component';
import { WaitingBlockComponent } from './components/core/waiting-block/waiting-block.component';
import { GameContractService } from '../core/services/game-contract.service';

@NgModule({
  declarations: [
    AppComponent,
    SecretNumberComponent,
    GameComponent,
    JoinGameComponent,
    CredentialsComponent,
    WaitingOpponentComponent,
    WaitingBlockComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [SignalRService, GameSignalRService, GameContractService],
  bootstrap: [AppComponent]
})
export class AppModule { }
