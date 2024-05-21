const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db.sqlite');

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS doctors (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            specialization TEXT
        )
    `);
}); // creating doctors table

//inseting value into doctors table
exports.createDoctor = (name, specialization, callback) => {
    db.run('INSERT INTO doctors (name, specialization) VALUES (?, ?)', [name, specialization], callback);
};

//getting all doctors from doctors table
exports.getAllDoctors = (callback) => {
    db.all('SELECT * FROM doctors', callback);
};

//getting doctors by ID
exports.getDoctorById = (id, callback) => {
    db.get('SELECT * FROM doctors WHERE id = ?', [id], callback);
};

//updating the doctors table
exports.updateDoctor = (id, name, specialization, callback) => {
    db.run('UPDATE doctors SET name = ?, specialization = ? WHERE id = ?', [name, specialization, id], callback);
};

//deleting the doctor info by their id
exports.deleteDoctor = (id, callback) => {
    db.run('DELETE FROM doctors WHERE id = ?', [id], callback);
};
