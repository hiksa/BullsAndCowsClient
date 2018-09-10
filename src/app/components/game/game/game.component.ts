import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GameContractService }  from '../../../../core/services/game-contract.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  public numberGuessForm: FormGroup;
  public numberGuess = { number: 0 };

  constructor(
    private router: Router, 
    private gameContractservice: GameContractService
  ) { }

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

  public submitGuessNumber() {    
    let secretNumber = this.numberGuessForm.value['number']
    console.log(`Submitted guess ${secretNumber}`);
    this.gameContractservice.guessNumber(secretNumber);
    this.router.navigate(['/waiting-opponent']);
  }

  get number() { return this.numberGuessForm.get('number'); }
}
