import { Component, OnInit, forwardRef } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'app-secret-number-state',
  templateUrl: './secret-number-state.component.html',
  styleUrls: ['./secret-number-state.component.css']
})
export class SecretNumberStateComponent implements OnInit {
  public game: Phaser.Game
  public secretNumberForm: FormGroup;
  public secret = { secretNumber: 0 };

  constructor(private appComponent: AppComponent) { }

  ngOnInit() : void {
    this.secretNumberForm = new FormGroup({
      'secretNumber': new FormControl(this.secret.secretNumber, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4),
        Validators.pattern('^[0-9]+$')
      ])
    });
  }

  get secretNumber() { return this.secretNumberForm.get('secretNumber'); }

  public submitSecretNumber() {
    this.appComponent.game.state.start('GameState');
  }
}
