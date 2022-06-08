import "reflect-metadata";
import { createConnection } from "typeorm";
import express, { Response, Request } from 'express'
import Router from "./routes/router";
import dotenv from "dotenv";
import swaggerUI from 'swagger-ui-express';
import * as swaggerDocs from './swagger/swagger.json';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from "cors";
import compression from 'compression';

createConnection().then(connection => {
    console.log("Connected successfully");
    dotenv.config();
    const PORT = process.env.PORT;
    const app = express();
    app 
        .use(express.json())
        .use(cors({ origin: `*`, }))
        .use(helmet())
        .use(morgan("tiny"))
        .use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs))
        .use("/", Router)
        .use(compression())
        .get("/", (req: Request, res: Response) => {
            res.redirect(`http://localhost:${PORT}/api-docs/`);
        });
    app.listen(PORT, ()=>{
        console.log("--------------------------------------------------"); 
        console.log(`Server running on port http://localhost:${PORT}/`);
        console.log("--------------------------------------------------"); 
    });   
}).catch(error => console.log(error));