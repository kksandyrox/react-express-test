module.exports = {
	createUser: createUser
}


function createUser(data, next) {
	console.log(data);
	next(null, data, 200);

}