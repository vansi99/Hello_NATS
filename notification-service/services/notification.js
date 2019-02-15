const sgMail = require('@sendgrid/mail');
const config = require('config');
const apiKey = config.get('sendgrid_api_key');
sgMail.setApiKey(apiKey);

async function sendMessageToEmail(email){

  const msg = {
    to: email,
    from: 'vansido99@gmail.com',
    subject: 'Nats',
    html: '<strong>Wellcome Man</strong>',
  };
    sgMail.send(msg);
};

module.exports = {
  sendMessageToEmail
};

