var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();
 
var config = {
    username: process.env.FTP_USERNAME,
    password: process.env.FTP_PASSWORD,
    host: process.env.FTPHOST,
    port: 21,
    localRoot: __dirname + "/../dist/",
    remoteRoot: "/",
    include: ['*']
}
    
ftpDeploy.deploy(config, function(err) {
    if (err) console.log(err)
    else console.log('finished');
});