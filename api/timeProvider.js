var moment = require("moment");

module.exports = {
    timedata: function() {
        var now = moment();
        console.log(now.format('MMMM Do YYYY, h:mm:ss a'));
        return now.format('MMMM Do YYYY, h:mm:ss a');
    }
}

