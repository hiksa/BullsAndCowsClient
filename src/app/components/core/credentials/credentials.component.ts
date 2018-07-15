import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '../../../../../node_modules/@angular/forms';
import { Router } from '@angular/router';
import Neon, { sc } from '@cityofzion/neon-js';

@Component({
  selector: 'app-credentials',
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.css']
})
export class CredentialsComponent implements OnInit {
  public credentialsForm: FormGroup;

  constructor(private router: Router) { }

  public ngOnInit(): void {
    this.credentialsForm = new FormGroup({
      'wif': new FormControl(null, [
        Validators.required
      ])
    });
  }
  
  public submitCredentials() {
    try {
      let wif = this.credentialsForm.value["wif"];
      let account = Neon.create.account(wif);
      let address = sc.ContractParam.byteArray(account.address, 'address');
      console.log(address);
      localStorage.setItem('address', address['value']);
      this.router.navigate(['/join']);
    } catch {
      this.credentialsForm.controls['wif'].setErrors({'incorrect': true});
      return;
    }
  }
  
  get wif() { return this.credentialsForm.get('wif'); }
}
