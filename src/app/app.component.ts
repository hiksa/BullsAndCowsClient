import { Component, OnInit } from '@angular/core';
import Neon, { rpc } from '@cityofzion/neon-js';

import * as OperationTypes from '../core/common/operation-types';
import { GameSignalRService } from "src/core/services/game-signal-r.service";
import { EventEmitter } from "@angular/core";

import * as Phaser from 'phaser-ce';
import 'phaser-ce/build/custom/pixi';
import 'phaser-ce/build/custom/p2';
import { SecretNumberState } from './../game/States/SecretNumberState';
import { TitleState } from '../game/States/TitleState';
import { QueueState } from '../game/States/QueueState';
import { GameState } from '../game/States/GameState';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  joinResult: boolean = false;
  joinedGameHandler = new EventEmitter<boolean>();
  title = 'app';

  public game: Phaser.Game;
  public background: Phaser.Sprite;

  constructor(private _gameSignalRService: GameSignalRService) {
    this._gameSignalRService.init(`hubs/game`);

    this.game = new Phaser.Game(1280, 720, Phaser.CANVAS, 'game', {
      preload: this.preload,
      create: this.create
    });
  }

  public preload(): void {
  }

  public create(): void {
    this.game.state.add('TitleState', TitleState, true);
    this.game.state.add('QueueState', QueueState, false);
    this.game.state.add('SecretNumberState', SecretNumberState, false);
    this.game.state.add('GameState', GameState, false);
  }

  subscribeToHubEvents(): void {
    this._gameSignalRService.registerAdditionalEvent(OperationTypes.GameJoined, this.joinedGameHandler);

    this.joinedGameHandler.subscribe((result: boolean) => {
      this.joinResult = result;
    });
  }

  ngOnInit(): void {
    // const client = new rpc.Query({method: 'invoke', params: ['0xbeea17e57b7e3fef4b36963502c8bf94d6f86ae3', 'name'], id: 10});
      // client.invokeFunction('0xbeea17e57b7e3fef4b36963502c8bf94d6f86ae3', 'name', []).then(data => console.log('ping: ' + data));
      // client.getVersion().then(data => console.log('version:' + data));

      const query = Neon.create.query({method: 'invokefunction', params: ['0xbeea17e57b7e3fef4b36963502c8bf94d6f86ae3', 'name' , []], id: 10});
      console.log(query);
      const response = query.execute('http://localhost:30333').then(data => console.log(data));
  }

  joinGame(): void {
    console.log('Joingame');
    this._gameSignalRService._hubConnection.send(`Join`, `AMHxMpqLvFtDPmbvUWabECajPWT2reqJQG`);
  }
}
