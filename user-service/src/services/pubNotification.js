const nats = require('nats').connect();

async function pubNotification(email){

    nats.on('error', function (e) {
        console.log('Error [' + nats.options.url + ']: ' + e);
        process.exit();
    });

    const subject = 'notfication register';
    const msg = email;

    console.log('Request a message', msg);

    nats.publish(subject, msg, function() {
        console.log('Published [' + subject + '] : "' + msg + '"');
    });

}

module.exports = {
    pubNotification
}