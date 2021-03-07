import 'reflect-metadata';
import 'dotenv/config';
import { Server } from 'http';
import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';

import config from './config/config';
import { connectDB } from './service/db';
import SocketService from './service/socket';
import router from './routes';

const app: Application = express();
const server = new Server(app);

app.use(cors());
app.use(helmet());
app.use(express.json());

app.set('socketService', new SocketService(server));
app.use('/', router);

const main = async () => {
	app.listen(config.PORT, () => {
		console.log(`Server is running at http://localhost:${config.PORT}.`);
	});
};

(async () => {
	await connectDB();
	await main();
})();
