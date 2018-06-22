import { Component, OnInit } from '@angular/core';
import Neon, { rpc } from '@cityofzion/neon-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor() {

  }

  ngOnInit(): void {
      // const client = new rpc.Query({method: 'invoke', params: ['0xbeea17e57b7e3fef4b36963502c8bf94d6f86ae3', 'name'], id: 10});
      // client.invokeFunction('0xbeea17e57b7e3fef4b36963502c8bf94d6f86ae3', 'name', []).then(data => console.log('ping: ' + data));
      // client.getVersion().then(data => console.log('version:' + data));

      const query = Neon.create.query({method: 'invokefunction', params: ['0xbeea17e57b7e3fef4b36963502c8bf94d6f86ae3', 'name' , []], id: 10});
      console.log(query);
      const response = query.execute('http://localhost:30333').then(data => console.log(data));
  }
}
