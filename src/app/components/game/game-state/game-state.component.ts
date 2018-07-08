import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SecretNumberState } from '../../../../game/States/SecretNumberState';
import { QueueState } from '../../../../game/States/QueueState';
import { GameState } from '../../../../game/States/GameState';
import * as Phaser from 'phaser-ce';
import 'phaser-ce/build/custom/pixi';
import 'phaser-ce/build/custom/p2';

@Component({
  selector: 'app-game-state',
  templateUrl: './game-state.component.html',
  styleUrls: ['./game-state.component.css']
})
export class GameStateComponent implements OnInit {
  public game: Phaser.Game
  public numberGuessForm: FormGroup;
  public numberGuess = { number: 0 };

  constructor() { 
    // this.game = new Phaser.Game(1280, 720, Phaser.CANVAS, 'game', {
    //   preload: this.preload,
    //   create: this.create
    // });
  }

  public ngOnInit() : void {
    this.numberGuessForm = new FormGroup({
      'number': new FormControl(this.numberGuess.number, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4),
        Validators.pattern('^[0-9]+$')
      ])
    });
  }

  public preload(): void {
  }

  public create(): void {
    // this.game.state.add('QueueState', QueueState, false);
    // this.game.state.add('SecretNumberState', SecretNumberState, false);
    // this.game.state.add('GameState', GameState, true);
  }

  public submitGuessNumber() {
    // TODO: Send guess number to check against the opponent's number
    console.log(`Submitted guess ${this.numberGuessForm.value['number']}`);
  }

  get number() { return this.numberGuessForm.get('number'); }
}
