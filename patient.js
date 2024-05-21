const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db.sqlite');

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS patients (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            age INTEGER,
            address TEXT
        )
    `);
}); //creating patients table

//inserting vlaue into the patients table
exports.createPatient = (name, age, address, callback) => {
    db.run('INSERT INTO patients (name, age, address) VALUES (?, ?, ?)', [name, age, address], callback);
};

//getting all the patients from the patients table
exports.getAllPatients = (callback) => {
    db.all('SELECT * FROM patients', callback);
};

//getting the patients by their id
exports.getPatientById = (id, callback) => {
    db.get('SELECT * FROM patients WHERE id = ?', [id], callback);
};

//updating the patients table
exports.updatePatient = (id, name, age, address, callback) => {
    db.run('UPDATE patients SET name = ?, age = ?, address = ? WHERE id = ?', [name, age, address, id], callback);
};

//deleting the patients table
exports.deletePatient = (id, callback) => {
    db.run('DELETE FROM patients WHERE id = ?', [id], callback);
};
