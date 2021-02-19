import { NextFunction, Request, Response } from 'express';

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
	next();
};
