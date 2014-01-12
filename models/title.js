'use strict';

var mongoose = require('mongoose'),
		Schema = mongoose.Schema,
		ObjectId = Schema.ObjectId;

var fields = {
	titleId: { type: Number },
	titleName: { type: String },
	titleNameSortable: { type: String },
	titleType: { type: String }
};

var titleSchema = new Schema(fields);

module.exports = mongoose.model('Title', titleSchema);