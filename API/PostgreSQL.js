"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgreSQLCommunicator = void 0;
const pg_1 = require("pg");
require("fs");
const fs_1 = require("fs");
class PostgreSQLCommunicator {
    // Privatized constructor to follow Singleton design pattern
    constructor() {
        let login = JSON.parse((0, fs_1.readFileSync)("./config/db.json", { encoding: 'utf8', flag: 'r' }));
        this.connected = false;
        console.log(login);
        this.client = new pg_1.Client(login);
    }
    exec_get_all(query, params) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("connect");
            if (!this.connected) {
                yield this.client.connect();
                this.connected = true;
            }
            console.log("getting response");
            let queryconfig = {
                text: query,
                values: params
            };
            let response = yield this.client.query(queryconfig);
            console.log("return response");
            console.log(response);
            return response;
        });
    }
}
exports.PostgreSQLCommunicator = PostgreSQLCommunicator;
