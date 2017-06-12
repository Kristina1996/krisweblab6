var mongoose = require('mongoose');
var uristring = "mongodb://root:alexa@LAPTOP-5FDPEABN:27017/lab6";
mongoose.connect(uristring,function(err,res){
    if(err) {
        console.log("ERROR connecting to: " + uristring + ". " + err);
    } else {
        console.log("Succeeded connected to: " + uristring);
    }
})

var userSchema = new mongoose.Schema({
    name: String

});

var User = mongoose.model('users', userSchema);


module.exports = {
    User: User
}