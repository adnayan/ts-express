import { connectDB } from '../service/db';
import { createRole } from './role.seeder';
import { createUser } from './user.seeder';

(async () => {
	await connectDB();
	await createRole();
	await createUser();
	console.log('Seeding complete.');
	process.exit();
})();
