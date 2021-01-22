import 'reflect-metadata';
import express, { Application, Request, Response, NextFunction } from 'express';
import { createConnection } from 'typeorm';

const main = async () => {
	const app: Application = express();
	await createConnection();
	const PORT = 5000;

	app.get('/', (req: Request, res: Response, next: NextFunction) => {
		res.json('Hello from application.');
	});

	app.listen(PORT, () => {
		console.log(`Server is running at http://localhost:${PORT}.`);
	});
};

main();
