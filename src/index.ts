import 'reflect-metadata';
import 'dotenv/config';
import { Server } from 'http';
import express, { Application, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';

import config from './config/config';
import { connectDB } from './service/db';
import SocketService from './service/socket';

const app: Application = express();
const server = new Server(app);

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

app.set('socketService', new SocketService(server));

app.get('/', (req: Request, res: Response, next: NextFunction) => {
	res.status(200).json('Hello from application.');
});

const main = async () => {
	app.listen(config.PORT, () => {
		console.log(`Server is running at http://localhost:${config.PORT}.`);
	});
};

(async () => {
	await connectDB();
	await main();
})();
