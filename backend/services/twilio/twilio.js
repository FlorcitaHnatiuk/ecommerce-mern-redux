import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID; 
const authToken = process.env.TWILIO_AUTH_TOKEN; 

const client = require('twilio')(accountSid, authToken, {
    lazyLoading: true
});

export const sendWSP = async () => {
	try {
		let msg = await client.messages.create({
			body: 'Hello, welcome to moov',
			from: "+12182204899",
			to: telephone,
		});
		return msg;
	} catch (error) {
		return error;
	}
};