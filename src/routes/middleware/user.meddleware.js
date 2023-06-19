import mongoose from 'mongoose';
import { userSchema } from '../../models/user.js';
const newSchema = mongoose.model('user', userSchema);
/*
{
username:",
password:"
}
*/

export const veryfyUserRepeat = async (req, res, next) => {
	try {
		const { username, password } = req.body;
		const user = await newSchema.findOne({ username });
		if (user) {
			console.log('Error, ya existe');
		} else {
			next();
		}
	} catch (error) {
		console.log(error);
	}
};
