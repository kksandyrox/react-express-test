module.exports = {
    checkApiVersion: checkApiVersion
}

function checkApiVersion(req, res, next) {
	var currentVersion = "v1";
	var pattern = new RegExp(currentVersion, "gi");
    if(!req.originalUrl.match(pattern)){
        return res.end("API version is deprecated");
    }
    next();
}