import { Component, OnInit, EventEmitter } from '@angular/core';
import * as OperationTypes from '../../../../core/common/operation-types';
import { Router } from '@angular/router';
import { GameSignalRService } from '../../../../core/services/game-signal-r.service';
import { GameContractService } from '../../../../core/services/game-contract.service';

@Component({
  selector: 'app-waiting-opponent',
  templateUrl: './waiting-opponent.component.html',
  styleUrls: ['./waiting-opponent.component.css']
})
export class WaitingOpponentComponent implements OnInit {
  public matchFoundHandler = new EventEmitter<boolean>();
  public bothNumbersPickedHandler = new EventEmitter<any>();
  public opponentSentGuessHandler = new EventEmitter<any>();
  public waitingForNextBlockHandler = new EventEmitter<any>();

  constructor(
    private gameSignalRService: GameSignalRService, 
    private gameContractservice: GameContractService, 
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.gameSignalRService.registerAdditionalEvent(OperationTypes.MatchFound, this.matchFoundHandler);
    this.gameSignalRService.registerAdditionalEvent(OperationTypes.BothNumbersPicked, this.bothNumbersPickedHandler);
    this.gameSignalRService.registerAdditionalEvent(OperationTypes.NumberGuessed, this.opponentSentGuessHandler);
    this.gameSignalRService.registerAdditionalEvent(OperationTypes.WaitingForNextBlock, this.waitingForNextBlockHandler);

    this.matchFoundHandler.subscribe((gameGuid: string) => {
      this.router.navigate(['/waiting-block']);
    });

    this.bothNumbersPickedHandler.subscribe((gameGuid: string) => {
      console.log('both numbers picked');
      this.router.navigate(['/game']);
    });

    this.opponentSentGuessHandler.subscribe((won: any) => {
      console.log(won);
      this.router.navigate(['/game']);
    });

    this.waitingForNextBlockHandler.subscribe((gameGuid: string) => {
      this.gameContractservice.joinGame(gameGuid);
      this.router.navigate(['/waiting-block']);
    });
  }
}
