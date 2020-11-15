const mongoose = require('mongoose');
const config = require('../../config');

const { host, port, database } = config.mongo;

mongoose.connect(`mongodb://${host}:${port}/${database}`, err => {
	if (err) {
		console.log('connect database error -->', err);
		process.exit(1);
	}
	console.log('connect database success'); 
});

module.exports = {
    mongoose
};
