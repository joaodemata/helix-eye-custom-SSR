import express, {Express, Request, Response} from "express";
import { config } from "./config";
import { render } from "./render";
import axios from "axios";

const app : Express = express();


app.use(express.static('dist'));

app.get('/galaxias',async (_req: Request, _res: Response) => {
    try {
        const {data} = await axios.get('https://images-api.nasa.gov/search?q=galaxies');
        const initalProps = {
            galaxies: data?.collection?.items
        };

        _res.send(render(_req.url, initalProps))
    } catch (_error) {
        console.error(_error)
    }
})

app.get('*', (_req: Request, _res: Response) => { 
    _res.send(render('/'));
})

app.listen(config.PORT, () => {
    console.log(`Listening in port http://localhost:${config.PORT}`)
});