import { EventEmitter, Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';

@Injectable()
export class SignalRService {
    private baseUrl: string = `http://localhost:54996`;

    connectionEstablished = new EventEmitter<Boolean>();

    private connectionIsEstablished = false;
    public _hubConnection: HubConnection;

    public init(hubUrl: string): void {
        this.createConnection(`${this.baseUrl}/${hubUrl}`);
        this.registerOnServerEvents();
        this.startConnection();

        this._hubConnection.serverTimeoutInMilliseconds = 10000000;
    }

    private createConnection(connection: string) {
        this._hubConnection = new HubConnectionBuilder()
            .withUrl(connection)
            .build();
    }

    private startConnection(): void {
        this._hubConnection
            .start()
            .then(() => {
                this.connectionIsEstablished = true;
                console.log('Hub connection started');
                this.connectionEstablished.emit(true);
            })
            .catch(err => {
                console.log('Error while establishing connection, retrying...');
                setTimeout(this.startConnection(), 5000);
            });
    }

    private registerOnServerEvents(): void {

    }

    public registerAdditionalEvent<T>(eventName: string, emitter: EventEmitter<T>): void {
        this._hubConnection.on(eventName, (message: T) => {
            emitter.emit(message);
        });
    }
}
