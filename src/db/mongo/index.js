const mongoose = require('mongoose');
const config = require('../../config');

const { user, password, host, port, database } = config.mongo;

mongoose.connect(`mongodb://${user}:${password}@${host}:${port}/${database}`, {
	useNewUrlParser: true,
	useUnifiedTopology: true
}, err => {
	if (err) {
		console.log('connect database error -->', err);
		process.exit(1);
	}
	console.log('connect database success'); 
});
