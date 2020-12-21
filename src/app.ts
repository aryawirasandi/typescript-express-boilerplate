import express, { Application, Request, Response, NextFunction } from "express";

const app:Application = express();

const add = (a:number, b:number):number => a + b;

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        "status" : "success",
        "message" : "hello world"
    });
});

app.listen(5000, () => console.log("Server Runnning"));