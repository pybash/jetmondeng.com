// This serves as a launcher plate
import e, { Application, Request, Response } from "express";
import { RouteConnections } from "./API/Routing";
import { PostgreSQLCommunicator } from "./API/PostgreSQL";

const express = require('express');
const app: Application = express();
const router: RouteConnections = new RouteConnections(app);
const psql: PostgreSQLCommunicator = new PostgreSQLCommunicator();


// Serve our index html and resources as expected.
app.use(express.static(__dirname + "/website-react/build"))

// Declared routes that are used in ReactJS' Router
// Other solutions were thrown around (e.g StackOverflow #52334591, #54282344, but this was the more simpler option)
const routes = ["", "contacts", "books"]
router.toRoute(routes);

app.get("/api", (req:  Request, res: Response) => {
    res.status(200).send({
        "timestamp": Date.now()
    })
})

app.get("/api/getposts", (req:  Request, res: Response) => {
    console.log("Hello")
    psql.exec_get_all("SELECT * from reviews", []).then((response) => {
        console.log("Hello")
        res.status(200).send(response.rows);  
    }).catch((err) => {
        res.status(500)
    })
})

app.listen(3300, () => {
    console.log("This is running.")
})