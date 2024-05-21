const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db.sqlite');

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS appointments (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            patient_id INTEGER,
            doctor_id INTEGER,
            date TEXT,
            time TEXT,
            FOREIGN KEY(patient_id) REFERENCES patients(id),
            FOREIGN KEY(doctor_id) REFERENCES doctors(id)
        )
    `);
}); //creating the appointments table

//inserting the value into the appointments
exports.createAppointment = (patient_id, doctor_id, date, time, callback) => {
    db.run('INSERT INTO appointments (patient_id, doctor_id, date, time) VALUES (?, ?, ?, ?)', [patient_id, doctor_id, date, time], callback);
};

//getting the patients name instead of id joining 
exports.getAllAppointments = (callback) => {
    const query = `
        SELECT appointments.id, patients.name AS patient_name, doctors.name AS doctor_name, appointments.date, appointments.time
        FROM appointments
        JOIN patients ON appointments.patient_id = patients.id
        JOIN doctors ON appointments.doctor_id = doctors.id
    `;
    db.all(query, callback);
};


exports.getAppointmentById = (id, callback) => {
    const query = `
        SELECT appointments.id, patients.name AS patient_name, doctors.name AS doctor_name, appointments.date, appointments.time
        FROM appointments
        JOIN patients ON appointments.patient_id = patients.id
        JOIN doctors ON appointments.doctor_id = doctors.id
        WHERE appointments.id = ?
    `;
    db.get(query, [id], callback);
};

//deleting the value in the appointments table
exports.deleteAppointment = (id, callback) => {
    db.run('DELETE FROM appointments WHERE id = ?', [id], callback);
};
