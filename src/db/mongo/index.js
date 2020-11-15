const mongoose = require('mongoose');
const config = require('../../config');

const { host, user, password, port, database } = config.mongo;

mongoose.connect(`mongodb://${user}:${password}@${host}:${port}/${database}`, err => {
	if (err) {
		console.log('connect database error -->', err);
		process.exit(1);
	}
	console.log('connect database success'); 
});
