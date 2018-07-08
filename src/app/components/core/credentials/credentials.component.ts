import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '../../../../../node_modules/@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credentials',
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.css']
})
export class CredentialsComponent implements OnInit {
  public credentialsForm: any;

  constructor(private router: Router) { 
    
  }

  public ngOnInit(): void {
    this.credentialsForm = new FormGroup({
      'wif': new FormControl(null, [
        Validators.required
      ]),
      'address': new FormControl(null, [
        Validators.required,
      ])
    });
  }
  
  public submitCredentials() {
    console.log(this.credentialsForm);
    // TODO: Send WIF and Address
    
    this.router.navigate(['/join']);
  }

  get wif() { return this.credentialsForm.get('wif'); } 
  get address() { return this.credentialsForm.get('address'); } 
}
