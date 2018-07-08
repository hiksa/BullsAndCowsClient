import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CredentialsComponent } from './components/core/credentials/credentials.component';
import { JoinGameComponent } from './components/game/join-game/join-game.component';
import { SecretNumberStateComponent } from './components/game/secret-number-state/secret-number-state.component';
import { GameStateComponent } from './components/game/game-state/game-state.component';

const ROUTES: Routes = [
  { path: '', pathMatch: 'full', component: CredentialsComponent },
  { path: 'join', component: JoinGameComponent },
  { path: 'number', component: SecretNumberStateComponent },
  { path: 'game', component: GameStateComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(ROUTES)],
	exports: [RouterModule]
})
export class AppRoutingModule { }