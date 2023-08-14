const mysql = require("mysql2");

// Create connection to db

const con = mysql.createConnection ({
    host: "b1d0nyf94l0v4kd07eeb-mysql.services.clever-cloud.com",
    user: "uiklb15btpljl2qq",
    password: "Qcv4yOvU5FEbSL1uY6b9"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!")
});

module.exports = con; 