import { Injectable } from '@angular/core';
import Neon, { rpc, api, sc, u } from '@cityofzion/neon-js';

@Injectable({
  providedIn: 'root'
})
export class GameContractService {
  public wif: string = null;

  constructor() { 
  }

  set setWif(wif: string) {
    this.wif = wif;
  }

  callSmartContract(operation: string, args: Array<any> = []) {
    let hash = 'b789a95d2302068caf1e553f72301fa0f65a0412';
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
      console.log(request);
      //request.url = networkUrl;
      Neon.doInvoke(request).then(res => console.log(res.response));
    });
  }

  joinGame(gameId: string) {
    let account = Neon.create.account(this.wif);
    let addressParam = sc.ContractParam.byteArray(account.address, 'address');

    let args = [u.str2hexstring(gameId), addressParam['value']];

    this.callSmartContract('join', args);
  }
}
