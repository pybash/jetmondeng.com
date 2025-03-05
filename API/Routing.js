"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteConnections = void 0;
const path_1 = __importDefault(require("path"));
class RouteConnections {
    /**
     * Construct a class that helps to route a specified array of strings.
     * @param app
     */
    constructor(app) {
        this._app = app;
    }
    /**
     * Add GET requests to a specified list of strings
     * @param routes
     */
    toRoute(routes) {
        for (let route of routes) {
            this._app.get("/" + route, (req, res) => {
                res.sendFile(path_1.default.join(__dirname + '/../website-react/build/index.html'));
            });
        }
    }
}
exports.RouteConnections = RouteConnections;
