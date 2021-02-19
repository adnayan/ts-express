import { NextFunction, Request, Response } from 'express';

export const checkRole = (roles: Array<string>) => {
	return async (req: Request, res: Response, next: NextFunction) => {
		next();
	};
};
