import express, { Application, NextFunction, Request, Response } from 'express';

const app: Application = express();
const PORT = 5000;

app.get('/', (req: Request, res: Response, next: NextFunction) => {
	res.json('Hello from application.');
});

app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}.`);
});
