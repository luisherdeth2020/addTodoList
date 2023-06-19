import mongoose from 'mongoose';

export const userSchema = mongoose.Schema({
	username: {
		type: 'string',
		required: true,
	},
	password: {
		type: 'string',
		required: true,
	},
});
