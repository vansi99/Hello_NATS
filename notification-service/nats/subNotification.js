const nats = require('nats').connect();
const notfication = require('../services/notification');

async function subNotification(){
   
    nats.on('error', function(e) {
        console.log('Error [' + nats.options.url + ']: ' + e);
        process.exit();
    });

    nats.on('close', function() {
        console.log('CLOSED');
        process.exit();
    });

    const subject = 'notfication register';

    console.log('Listening on [' + subject + ']');
    try {
        await nats.subscribe(subject, function(msg) {
            console.log('Received "' + msg + '"');
            notfication.sendMessageToEmail(msg);
        });
    } catch (err) {
        console.log(err.messages);
    }
    
}

module.exports = {
    subNotification
};