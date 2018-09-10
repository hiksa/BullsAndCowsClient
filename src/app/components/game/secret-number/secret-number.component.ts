import { Component, OnInit, forwardRef } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GameSignalRService } from '../../../../core/services/game-signal-r.service';
import { GameContractService }  from '../../../../core/services/game-contract.service';

@Component({
  selector: 'app-secret-number',
  templateUrl: './secret-number.component.html',
  styleUrls: ['./secret-number.component.css']
})
export class SecretNumberComponent implements OnInit {
  public secretNumberForm: FormGroup;
  public secret = { secretNumber: 0 };

  constructor(
    private router: Router, 
    private gameContractservice: GameContractService
  ) { }

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

  public submitSecretNumber() {
    let secretNumber = this.secretNumberForm.value['secretNumber'];
    console.log('Submitted secret number ' + secretNumber);
    this.gameContractservice.pickNumber(secretNumber);
    this.router.navigate(['/waiting-opponent']);
  }
  
  get secretNumber() { return this.secretNumberForm.get('secretNumber'); }
}
