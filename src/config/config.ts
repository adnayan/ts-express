export default {
	JWT_SECRET: process.env.JWT_SECRET || 'qwerty123456!@#$%^.',

	PORT: Number(process.env.PORT) || 5000,
};
