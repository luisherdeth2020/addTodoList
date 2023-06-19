import mongoose from 'mongoose';
import { userSchema } from '../models/user.js';

const newSchema = mongoose.model('user', userSchema);

export const createUserController = (req, res) => {
	const newUser = newSchema(req.body);

	newUser.save()
		// retorna
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
};
export const getUserController = async (req, res) => {
	// objeto Schema
	await newSchema

		.find()
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
};