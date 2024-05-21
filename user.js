const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db.sqlite');
const bcrypt = require('bcryptjs');

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT,
            password TEXT
        )
    `);
}); //creating the user table

//hashing and inserting value into the users table 
exports.createUser = (username, password, callback) => {
    const hashedPassword = bcrypt.hashSync(password, 10); //hashing password
    db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], callback);
};

//checking if the user exists in the users table
exports.findUserByUsername = (username, callback) => {
    db.get('SELECT * FROM users WHERE username = ?', [username], callback);
};
