import { Request, Response } from 'express';

export default class UserController {
	static listAll = async (req: Request, res: Response) => {
		res.status(200).send();
	};

	static getOneById = async (req: Request, res: Response) => {
		res.status(200).send();
	};

	static editUser = async (req: Request, res: Response) => {
		res.status(200).send();
	};

	static deleteUser = async (req: Request, res: Response) => {
		res.status(200).send();
	};
}
