const { mongoose } = require('./index');

const Schema = mongoose.Schema;
// const ObjectId = Schema.Types.ObjectId;
// movies: [{ type: ObjectId, ref: 'test2' }],

module.exports = mongoose.model('pagecount', new Schema({
  url: {
    type: String,
    required: [true, 'url 不能为空'],
		unique: true,
	},
  count: {
    type: Number,
    default: 0,
  }
}), 'pagecount');
