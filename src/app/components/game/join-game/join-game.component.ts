import { Component, OnInit, EventEmitter } from '@angular/core';
import { GameSignalRService } from '../../../../core/services/game-signal-r.service';
import * as OperationTypes from '../../../../core/common/operation-types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-join-game',
  templateUrl: './join-game.component.html',
  styleUrls: ['./join-game.component.css']
})
export class JoinGameComponent implements OnInit {
  public joinResult: boolean = false;
  public joinedGameHandler = new EventEmitter<boolean>();

  constructor(private _gameSignalRService: GameSignalRService, private router: Router) { 
    this._gameSignalRService.init(`hubs/game`);
  }

  public ngOnInit(): void {
    
  }

  public joinGame(): void {
    console.log('Joingame');

    // TODO: Change to Address that user has entered
    this.router.navigate(['/number']);
    this._gameSignalRService._hubConnection.send(`Join`, `AMHxMpqLvFtDPmbvUWabECajPWT2reqJQG`);
  }

  public subscribeToHubEvents(): void {
    this._gameSignalRService.registerAdditionalEvent(OperationTypes.GameJoined, this.joinedGameHandler);

    this.joinedGameHandler.subscribe((result: boolean) => {
      this.joinResult = result;
    });
  }
}
