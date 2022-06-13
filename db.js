const Firebird = require('node-firebird');
const fs = require('fs');
const options = require('./options');

const TABLE = ''
const QUERY = 'SELECT * FROM' + TABLE

Firebird.attach(options, function (err, db) {

    if (err)
        throw err;

    db.query(QUERY, function (err, result) {
        fs.writeFileSync('db.json', JSON.stringify(result));
        db.detach();
    });

});