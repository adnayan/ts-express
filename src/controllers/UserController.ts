import { Request, Response } from 'express';

import { User } from '../entity/User';

export default class UserController {
	static listAll = async (req: Request, res: Response) => {
		let user: User = new User();
		console.log(user);
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

	static add = async (req: Request, res: Response) => {
		/* Do not try to code perfect at this point, there is no point of doing so if it decrease the speed of development,
		 * Think about it later, long way to go.
		 */
		/*
		 * Import user entity
		 * Extract data from request object
		 * Validate if password and confirmPassword are same
		 * 	if not true: return error
		 *	else: proceed to next statement
		 * Validate image is valid image or empty:
		 * 	if not true:
		 *		return error
		 * 	else: proceed to next statement
		 * Validate rest of the properties from req object with respect to user entity using class-validator
		 *	if not true:
		 * 		return error
		 * 	else: proceed to next statement
		 * Import bcryptjs and encrypt password, replace plain text password with hashed password
		 * Save salt in new column or property in user entity "salt" (not sure if it is necessary, need to check documentation)
		 * Create a new user and save the result in a variable "user"
		 * 	if the variable "user" returns new row added confirmation: return success message
		 *	else: send exception/error message
		 */
		res.status(200).send();
	};
}
