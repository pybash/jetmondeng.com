
import { Application, Request, Response } from "express";
import path from "path";

class RouteConnections {    
    _app: Application;

    /**
     * Construct a class that helps to route a specified array of strings.
     * @param app 
     */
    constructor(app: Application) {
        this._app = app;
    }

    /**
     * Add GET requests to a specified list of strings
     * @param routes 
     */
    toRoute(routes: string[]) {
        for(let route of routes) {
            this._app.get("/" + route, (req: Request, res: Response) => {
                res.sendFile(path.join(__dirname + '/../website-react/build/index.html'))
            })
        }
    }
}

export { RouteConnections }