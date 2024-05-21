# Hospital_management_system
This is a simple hospital management system where it performs CRUD operations with authentication


A comprehensive Hospital Management System built with Node.js, Express, and SQLite. This system manages patients, doctors, appointments, and includes an authentication mechanism.

## Features

- **Patient Management**: Add, edit, delete, and list patients.
- **Doctor Management**: Add, edit, delete, and list doctors with photos.
- **Appointment Management**: Schedule, edit, delete, and list appointments showing patient and doctor names.
- **Authentication**: User registration, login, and logout functionalities.
- **Dashboard**: An informative dashboard with sections for appointments, doctors, and patient statistics.
- **Testimonials**: Display patient testimonials.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: SQLite
- **Frontend**: EJS (Embedded JavaScript), Bootstrap
- **Authentication**: express-session, bcryptjs

## Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/Kashchit/hospital-management-system.git
    cd hospital-management-system
    ```

2. **Install dependencies:**

    ```sh
    npm install express sqlite3 ejs express-session bcrypt
    ```

3. **Run the application:**

    ```sh
    node app.js
    ```

    The application will be available at `http://localhost:8848`.

## Usage

### Authentication

1. **Register**: Visit `/auth/register` to create a new user.
2. **Login**: Visit `/auth/login` to log in.

### Managing Patients

- **Add Patient**: Navigate to `/patients/add`.
- **Edit Patient**: Navigate to `/patients/edit/:id`.
- **Delete Patient**: Navigate to `/patients/delete/:id`.
- **List Patients**: Navigate to `/patients`.

### Managing Doctors

- **Add Doctor**: Navigate to `/doctors/add`.
- **Edit Doctor**: Navigate to `/doctors/edit/:id`.
- **Delete Doctor**: Navigate to `/doctors/delete/:id`.
- **List Doctors**: Navigate to `/doctors`.

### Managing Appointments

- **Add Appointment**: Navigate to `/appointments/add`.
- **Edit Appointment**: Navigate to `/appointments/edit/:id`.
- **Delete Appointment**: Navigate to `/appointments/delete/:id`.
- **List Appointments**: Navigate to `/appointments`.


### Dashboard

- **View Dashboard**: Navigate to `/dashboard` for an overview of the system including appointment statistics, doctor availability, and patient testimonials.

## Project Structure

```plaintext
hospital-management-system/
├── controllers/
│   ├── appointmentController.js
│   ├── authController.js
│   ├── doctorController.js
│   ├── patientController.js
│   |
├── models/
│   ├── appointment.js
│   ├── doctor.js
│   ├── patient.js
│   ├── user.js
│   |
├── routes/
│   ├── appointments.js
│   ├── auth.js
│   ├── doctors.js
│   ├── patients.js
│   |
├── views/
│   ├── appointments/
│   │   ├── list.ejs
│   │   ├── add.ejs
│   │   ├── edit.ejs
│   ├── auth/
│   │   ├── login.ejs
│   │   ├── register.ejs
│   ├── doctors/
│   │   ├── list.ejs
│   │   ├── add.ejs
│   │   ├── edit.ejs
│   ├── patients/
│   │   ├── list.ejs
│   │   ├── add.ejs
│   │   ├── edit.ejs
│   |
├── public/
│   ├── css/
│   ├── img/
├── app.js
├── package.json

