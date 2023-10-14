const formData = require('form-data')
const Mailgun = require('mailgun.js');
const { mailgunApiKey } = require('../config');

const mailgun = new Mailgun(formData);

const mg = mailgun.client({
	username: 'api',
	key: mailgunApiKey,
});

const sendEmail = async (email, subject, text)=>{
    try {
        const response = await mg.messages
        .create('sandbox7d05db5add4d42e7b2d6da2602945022.mailgun.org', {
            from: "Mailgun Sandbox <postmaster@sandbox7d05db5add4d42e7b2d6da2602945022.mailgun.org>",
            to: [email],
            subject,
            text
        })

        return {
            success: true
        }
    } catch (error) {
        return {
            success: false,
        }
    }
}

module.exports = sendEmail