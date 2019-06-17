var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();
 
var config = {
    username: process.env.FTP_USERNAME,
    password: process.env.FTP_PASSWORD,
    host: process.env.FTP_HOSTNAME,
    port: 21,
    localRoot: __dirname + ".",
    remoteRoot: "/public_html/",
    include: ['*']
}

console.log(config.username + "@" + config.host + ":" + config.port);
    
ftpDeploy.deploy(config, function(err) {
    if (err) console.log(err)
    else console.log('finished');
});
