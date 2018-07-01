import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-game-state',
  templateUrl: './game-state.component.html',
  styleUrls: ['./game-state.component.css']
})
export class GameStateComponent implements OnInit {
  public game: Phaser.Game
  public numberGuessForm: FormGroup;
  public numberGuess = { number: 0 };

  constructor() { }

  ngOnInit() : void {
    this.numberGuessForm = new FormGroup({
      'number': new FormControl(this.numberGuess.number, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4),
        Validators.pattern('^[0-9]+$')
      ])
    });
  }

  get number() { return this.numberGuessForm.get('number'); }

  public submitGuessNumber() {
    console.log(this.numberGuessForm.value['number']);
    console.log('submitted guess');
  }
}
