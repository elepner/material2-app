import {Component} from '@angular/core';
import {Client} from './model/client';

@Component({
  moduleId: module.id,
  selector: 'material2-app-app',
  templateUrl: 'material2-app.component.html',
  styleUrls: ['material2-app.component.css'],
  
})
export class Material2AppAppComponent {
  foods: any[] = [
    {name: 'Pizza', rating: 'Excellent'},
    {name: 'Burritos', rating: 'Great'},
    {name: 'French fries', rating: 'Pretty good'},
  ];

  clients: Client[];
  progress: number = 0;

  constructor() {
    
    this.clients = [1,2,3,4,5,6,7].map((number) => {
      let client = new Client();
      client.id = number;
      client.clientId = number.toString();
      client.clientName = "Client" + number;
      client.clientName = "Client No " + number;
      client.clientUri = "com.organization.client";
      client.enabled = true;
      client.requireConsent = Math.random() > 0.5;
      return client;
    })
    // Update the value for the progress-bar on an interval.
    
  }
}
