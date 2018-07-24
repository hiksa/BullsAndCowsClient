import { Component, OnInit, EventEmitter } from '@angular/core';
import * as OperationTypes from '../../../../core/common/operation-types';
import { Router } from '@angular/router';
import { GameSignalRService } from '../../../../core/services/game-signal-r.service';
import { GameContractService } from '../../../../core/services/game-contract.service';

@Component({
  selector: 'app-waiting-screen',
  templateUrl: './waiting-screen.component.html',
  styleUrls: ['./waiting-screen.component.css']
})
export class WaitingScreenComponent implements OnInit {
  public matchFoundHandler = new EventEmitter<boolean>();

  constructor(private gameSignalRService: GameSignalRService, private gameContractservice: GameContractService, private router: Router) { 
  }

  public ngOnInit(): void {
    this.gameSignalRService.registerAdditionalEvent(OperationTypes.MatchFound, this.matchFoundHandler);

    this.matchFoundHandler.subscribe((gameGuid: string) => {
      this.gameContractservice.joinGame(gameGuid);
      this.router.navigate(['/number'])
    });
  }
}
