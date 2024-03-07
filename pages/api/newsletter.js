var sendpulse = require("sendpulse-api");

var API_USER_ID = process.env.SENDPULSE_API_USER_ID
var API_SECRET = process.env.SENDPULSE_API_SECRET
var ADDRESSBOOK_ID = process.env.SENDPULSE_ADDRESSBOOK_ID
var SIGNUP_TEMPLATE_ID = process.env.SENDPULSE_SIGNUP_TEMPLATE_ID
var TOKEN_STORAGE = "/tmp/";

const sendEmail = (email) => new Promise((resolve) => {
    sendpulse.init(API_USER_ID,API_SECRET,TOKEN_STORAGE,function(token) {
        if (token && token.is_error) {
            return resolve()
        }

        sendpulse.addEmails(function() {
            sendpulse.smtpSendMail(function(data) {
                return resolve()
            }, {
                subject: 'Thanks for signing up',
                from: {
                    name: 'Wil',
                    email: 'wil@copinguk.org',
                },
                to: [
                    {
                        name: email,
                        email
                    }
                ],
                template: {
                    id: SIGNUP_TEMPLATE_ID
                }
            })
        }, ADDRESSBOOK_ID, [email])
    });
})

export default async function handler(req, res) {
    const { email, name } = req.query
    if (name) {
        // if name is provided, a bot has taken the honey pot!
        return res.redirect('/signup-success')
    }

    await sendEmail(email)

    return res.redirect('/signup-success')
}