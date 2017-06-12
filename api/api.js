var db = require('../db/db.js');
var mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectID;
module.exports = {
    getAllUsers: function() {
        return db.User.find();
    },
    getUser: function(idu){
        console.log(idu);
        return db.User.find({_id : ObjectId(idu)});
    },

    addUser: function(useru, callback) {
        console.log("Name "+useru);
        var user1 = new db.User({
            name: useru.name
        });
        return user1.save(function(err, result){
            if(result){
                console.log(result);
                callback(result);
            }
        })
    },

    deleteUser: function(idu,data) {
        console.log("idu = "+ idu);
        return db.User.find({ _id: ObjectId(idu)}).remove().exec();
    },

    updateUser: function(id,useru) {
        console.log("id" + id);
        return db.User.findOneAndUpdate({_id:id},{$set:{name:useru.name2}}, {upsert: true, new: true}, function(err, result){
            if(result){
                console.log(result);
            }
        })
    }



}