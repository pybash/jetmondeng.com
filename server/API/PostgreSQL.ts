import pg, { Client } from 'pg';
import 'fs' ;
import { readFileSync } from 'fs';

export class PostgreSQLCommunicator {
    private client: Client;
    private connected: boolean;

    // Privatized constructor to follow Singleton design pattern
    constructor () {
        let login: Object = JSON.parse(readFileSync("./config/db.json", {encoding: 'utf8', flag: 'r'}));
        this.connected = false;
        console.log(login)
        this.client = new Client(
            login
        );
    }

    public async exec_get_all(query: string, params: string[]): Promise<pg.QueryArrayResult<any>> {
        console.log("connect")
        if(!this.connected) {
            await this.client.connect();
            this.connected = true;
        }
        console.log("getting response")

        let queryconfig = {
            text: query,
            values: params
        }

        let response = await this.client.query(queryconfig);
        console.log("return response")
        console.log(response)
        return response;
    }
}