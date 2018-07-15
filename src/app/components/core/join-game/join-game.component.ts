import { Component, OnInit, EventEmitter } from '@angular/core';
import { GameSignalRService } from '../../../../core/services/game-signal-r.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-join-game',
  templateUrl: './join-game.component.html',
  styleUrls: ['./join-game.component.css']
})
export class JoinGameComponent implements OnInit {
  constructor(private _gameSignalRService: GameSignalRService, private router: Router) { 
    this._gameSignalRService.init(`hubs/game`);
  }

  public ngOnInit(): void {
  }

  public joinGame(): void {
    let address = localStorage.getItem('address');
    console.log('Searhing for game. Address: ' + address);
    
    this._gameSignalRService._hubConnection.send(`Join`, address);
    this.router.navigate(['/waiting']);
  }
}
