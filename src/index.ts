import express from "express";
import { Request, Response, NextFunction } from 'express'
import router from "./router";


const app = express();

app.use(express.json());
app.use("/", router);
app.use((err: any, req: Request, res: Response, next: NextFunction): void => {
    console.log("err", err)
    res.status(err.statusCode || 500).json({
        code: err.statusCode || err.code,
        message: err.message,
        data: err.data,
        stack: err.stack,
        details: err.details
    });
});


app.listen(3330, () => {
    console.log("Server starter...")
});