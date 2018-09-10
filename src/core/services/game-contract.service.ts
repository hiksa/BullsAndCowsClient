import { Injectable } from '@angular/core';
import Neon, { rpc, api, sc, u } from '@cityofzion/neon-js';

@Injectable({
  providedIn: 'root'
})
export class GameContractService {
  public wif: string = null;
  public gameId: string = null;

  constructor() { 
  }

  set setWif(wif: string) {
    this.wif = wif;
  }

  callSmartContract(operation: string, args: Array<any> = []) {
    let hash = '201f05548451621376eb6e3c96c7299c1c86b9dc';
    let networkUrl = 'http://localhost:30333';
    let neoscanUrl = 'http://localhost:4000/api/main_net';

    let account = Neon.create.account(this.wif);

    let script = Neon.create.script(
      {
        scriptHash: hash,
        operation: operation,
        args: args
      }
    );

    let request = {
      net: neoscanUrl,
      url: networkUrl,
      script,
      address: account.address,
      privateKey: account.privateKey,
      publicKey: account.publicKey,
      gas: 1,
      balance: null
    };

    api.neoscan.getBalance(neoscanUrl, account.address).then(data => {
      request.balance = data;
      console.log('Invocation of: ' + operation);
      console.log('Args: ', args);
      Neon.doInvoke(request).then(res => console.log(res.response));
    });
  }

  joinGame(gameId: string) {
    this.gameId = gameId;

    let args = [u.str2hexstring(gameId), this.address];
    this.callSmartContract('join', args);
  }

  pickNumber(number: string) {
    let args = [u.str2hexstring(this.gameId), this.address, u.str2hexstring(number)];
    this.callSmartContract('pick', args);
  }

  guessNumber(number: string) {
    let args = [u.str2hexstring(this.gameId), this.address, u.str2hexstring(number)];
    this.callSmartContract('guess', args);
  }

  get address() {
    return localStorage.getItem('address');
  }
}
