// We do not want to expose that our API 
// is powered by Express/C#/Java etc.
// It is good practice not to expose internal 
// implementation to the api users.
// So we write a middleware to remove response header

const removeHeaders = (req, res, next) => {
    res.removeHeader('X-Powered-By');
    next();
}

module.exports = removeHeaders;