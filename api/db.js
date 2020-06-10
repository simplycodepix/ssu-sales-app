var mysql = require('mysql');

let connection;

const setupConnection = () => {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'sales_app'
    });

    connection.connect(function (err) {
        if (err) {
            console.log('error when connecting to db:', err);
            setTimeout(setupConnection, 2000);
        } else {
            console.log('connected to db')
        }
    });

    connection.on('error', function (err) {
        console.log('db error', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            setupConnection();
        } else {
            throw err;
        }
    });
}

setupConnection();

module.exports = connection;