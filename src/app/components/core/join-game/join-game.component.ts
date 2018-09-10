import { Component, OnInit, EventEmitter } from '@angular/core';
import * as OperationTypes from '../../../../core/common/operation-types';
import { GameSignalRService } from '../../../../core/services/game-signal-r.service';
import { GameContractService } from '../../../../core/services/game-contract.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-join-game',
  templateUrl: './join-game.component.html',
  styleUrls: ['./join-game.component.css']
})
export class JoinGameComponent implements OnInit {
  public gameCreatedHandler = new EventEmitter<any>();
  public matchFoundHandler = new EventEmitter<any>();

  constructor(
    private gameSignalRService: GameSignalRService, 
    private router: Router, 
    private gameContracts: GameContractService
  ) { 
    this.gameSignalRService.init(`hubs/game`);
  }

  public ngOnInit(): void {
    this.gameSignalRService.registerAdditionalEvent(OperationTypes.GameCreated, this.gameCreatedHandler);
    this.gameSignalRService.registerAdditionalEvent(OperationTypes.MatchFound, this.matchFoundHandler);
    
    this.gameCreatedHandler.subscribe((gameGuid: string) => {
      console.log('joined game ', gameGuid);
      this.gameContracts.joinGame(gameGuid);
      this.router.navigate(['/waiting-opponent']);
    });

    this.matchFoundHandler.subscribe((gameGuid: string) => {
      this.gameContracts.joinGame(gameGuid);
      this.router.navigate(['/waiting-block']);
    });
  }

  public joinGame(): void {
    console.log('Searhing for game. Address: ' + this.gameContracts.address);
    
    this.gameSignalRService._hubConnection.send(`Join`, this.gameContracts.address);
  }
}
