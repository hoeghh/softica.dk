var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();
 
var config = {
    user: process.env.FTP_USERNAME,
    password: process.env.FTP_PASSWORD,
    host: process.env.FTP_HOSTNAME,
    port: 21,
    localRoot: "/home/circleci/project/dist/",
    remoteRoot: "/public_html/",
    include: ['*'],
    exclude: ['.git','node_modules','.circleci','package-lock.json']
}

console.log(config.user + "@" + config.host + ":" + config.port);
console.log("localRoot : " + config.localRoot)
console.log("remoteRoot : " + config.remoteRoot)
    
ftpDeploy.deploy(config, function(err) {
    if (err) console.log(err)
    else console.log('finished');
});
