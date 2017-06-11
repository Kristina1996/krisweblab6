var moment = require("moment");
var timeProvider  = require("./api/timeProvider");
var myscript = require("./myscript");

function sayHello(name) {

    console.log("Hi, " + name + "! This is my first NodeJS app!");

}

sayHello("Kristina");

myscript.sayHello("Kristina");
timeProvider.timedata();
