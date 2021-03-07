import { Role, IRole } from '../entity/Role';

const roles: Array<IRole> = [
	{
		title: 'Administrator',
		slug: 'admin',
	},
	{
		title: 'Standard User',
		slug: 'standard-user',
	},
];

export const createRole = async () => {
	for (let r of roles) {
		try {
			const role = new Role();
			role.title = r.title;
			role.slug = r.slug;
			await role.save();
		} catch (error) {
			console.log(error);
		}
	}
};
