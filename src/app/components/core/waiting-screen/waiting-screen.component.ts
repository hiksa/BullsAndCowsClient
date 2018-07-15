import { Component, OnInit, EventEmitter } from '@angular/core';
import * as OperationTypes from '../../../../core/common/operation-types';
import { Router } from '@angular/router';
import { GameSignalRService } from '../../../../core/services/game-signal-r.service';

@Component({
  selector: 'app-waiting-screen',
  templateUrl: './waiting-screen.component.html',
  styleUrls: ['./waiting-screen.component.css']
})
export class WaitingScreenComponent implements OnInit {
  public joinResult: boolean = false;
  public joinedGameHandler = new EventEmitter<boolean>();

  constructor(private _gameSignalRService: GameSignalRService, private router: Router) { 
    this._gameSignalRService.init(`hubs/game`);
  }

  public ngOnInit(): void {
    this._gameSignalRService.registerAdditionalEvent(OperationTypes.GameJoined, this.joinedGameHandler);

    this.joinedGameHandler.subscribe((result: boolean) => {
      this.joinResult = result;
      this.router.navigate(['/game'])
    });
  }
}
