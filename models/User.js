var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var YoutuberSchema = new Schema({
    name: String,
    tema: String,
    seguidores: Number
});

var YoutubeModel = mongoose.model('YoutubeModel', YoutuberSchema);