import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CredentialsComponent } from './components/core/credentials/credentials.component';
import { JoinGameComponent } from './components/core/join-game/join-game.component';
import { SecretNumberComponent } from './components/game/secret-number/secret-number.component';
import { GameComponent } from './components/game/game/game.component';
import { WaitingOpponentComponent } from './components/core/waiting-opponent/waiting-opponent.component';
import { WaitingBlockComponent } from './components/core/waiting-block/waiting-block.component';

const ROUTES: Routes = [
  { path: '', pathMatch: 'full', component: CredentialsComponent },
  { path: 'join', component: JoinGameComponent },
  { path: 'waiting-opponent', component: WaitingOpponentComponent },
  { path: 'waiting-block', component: WaitingBlockComponent },
  { path: 'number', component: SecretNumberComponent },
  { path: 'game', component: GameComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(ROUTES)],
	exports: [RouterModule]
})
export class AppRoutingModule { }