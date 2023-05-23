const dns = require('dns');

const checkInternet = (callback)=>{
    dns.lookup('checkwindows.com',function(err) {
        if (err && err.code == "ENOTFOUND") {
            callback("Offline");
        } else {
            callback('Online');
        }
    })
}


module.exports = checkInternet;
