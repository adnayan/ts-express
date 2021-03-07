import { User, IUser } from '../entity/User';

const users: Array<IUser> = [
	{
		firstName: 'John',
		lastName: 'Doe',
		isActive: true,
		email: 'john@example.com',
		password: 'secret',
		image: 'default.jpg',
		roleId: 1,
	},
	{
		firstName: 'Jane',
		lastName: 'Doe',
		isActive: true,
		email: 'jane@example.com',
		password: 'secret',
		image: 'default.jpg',
		roleId: 2,
	},
];

export const createUser = async () => {
	for (let u of users) {
		try {
			const user = new User();
			user.firstName = u.firstName;
			user.lastName = u.lastName;
			user.isActive = u.isActive;
			user.email = u.email;
			user.password = u.password;
			user.image = u.image;
			user.roleId = u.roleId;
			await user.save();
		} catch (error) {
			console.log(error);
		}
	}
};
