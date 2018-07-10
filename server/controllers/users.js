var userDao = require("../dao/user");

module.exports = {
	register: register
}


function register(req, res) {
	userDao.createUser('req.body', function(error, data, statusCode) {
		res.end(data);
	});
}