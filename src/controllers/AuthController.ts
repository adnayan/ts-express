import { Request, Response } from 'express';

export default class AuthController {
	static login = async (req: Request, res: Response) => {
		res.status(200).send();
	};

	static changePassword = async (req: Request, res: Response) => {
		res.status(200).send();
	};
}
