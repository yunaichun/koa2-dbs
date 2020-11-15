const { mongoose } = require('./index');

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

module.exports = mongoose.model('test', new Schema({
  username: {
    type: String,
    required: [true, 'username 不能为空'],
    default: 'test',
		// unique: true, // == 不可有重复的
	},
	brother: {
    type: String,
    default: 'test',
  },
  age: {
    type: Number,
    default: 'test',
  },
  sex: {
    type: String,
    default: 'test',
  },
  birthday: {
    type: Date,
    default: 'test',
  }
}), 'test');
