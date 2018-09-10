import { Component, OnInit, EventEmitter } from '@angular/core';
import * as OperationTypes from '../../../../core/common/operation-types';
import { Router } from '@angular/router';
import { GameSignalRService } from '../../../../core/services/game-signal-r.service';
import { GameContractService } from '../../../../core/services/game-contract.service';

@Component({
  selector: 'app-waiting-block',
  templateUrl: './waiting-block.component.html',
  styleUrls: ['./waiting-block.component.css']
})
export class WaitingBlockComponent implements OnInit {
  public matchFoundHandler = new EventEmitter<boolean>();
  public bothNumbersPickedHandler = new EventEmitter<any>();
  public opponentSentGuessHandler = new EventEmitter<any>();

  constructor(    
    private gameSignalRService: GameSignalRService, 
    private gameContractservice: GameContractService, 
    private router: Router
  ) { }

  ngOnInit() {
    this.gameSignalRService.registerAdditionalEvent(OperationTypes.MatchFoundBlockchain, this.matchFoundHandler);
    this.gameSignalRService.registerAdditionalEvent(OperationTypes.BothNumbersPickedBlockchain, this.bothNumbersPickedHandler);
    this.gameSignalRService.registerAdditionalEvent(OperationTypes.NumberGuessed, this.opponentSentGuessHandler);
    
    this.matchFoundHandler.subscribe((gameGuid: string) => {
      this.router.navigate(['/number']);
    });

    this.bothNumbersPickedHandler.subscribe((gameGuid: string) => {
      console.log('both numbers picked');
      this.router.navigate(['/game']);
    });

    this.opponentSentGuessHandler.subscribe((won: any) => {
      console.log(won);
      this.router.navigate(['/game']);
    });
  }

}
