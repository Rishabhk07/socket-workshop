/**
 * Created by rishabhkhanna on 02/12/17.
 */
var file = require("fs");
file.readFile('name.txt', function (err, data) {
    if (err) throw err;
    console.log(data.toString());
})