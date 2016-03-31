var nodemailer = require('nodemailer'),
    xoauth2 = require('xoauth2'),
    generator = null,
    transporter = null;

module.exports = function(settings, service) {
    settings = settings[service];
    
    if(service === 'gmail') {
        generator = xoauth2.createXOAuth2Generator({
            user: settings.user,
            clientId: settings.clientId,
            clientSecret: settings.secret,
            refreshToken: settings.refreshToken
        });
        
        generator.on('token', function(token) {
            console.log('New token for %s: %s', token.user, token.accessToken);
        });
    }
    
    transporter = nodemailer.createTransport({
        service: service,
        auth: {
            xoauth2: generator
        }
    });
    
    return transporter;
};