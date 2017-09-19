import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { ContactController } from './controllers/contact';
import { LoginController } from './controllers/login';

const app: express.Application = express();
const port: string = process.env.PORT || '4000';

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/contact', ContactController);
app.use('/login', LoginController);

var server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
  });
