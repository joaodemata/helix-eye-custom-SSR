import express, {Express, Request, Response} from "express";
import { config } from "./config";
import { template } from "./render/template";

const app : Express = express();


app.get('*', (_req: Request, _res: Response) => { 
    _res.send(template(`<h1>Hola desde la ruta ${_req.url}</h1>`));
})

app.listen(config.PORT, () => {
    console.log(`Listening in port http://localhost:${config.PORT}`)
});