require('dotenv').config();
const mongoose = require('mongoose');
const readline = require('readline');
const Student = require('./Models/Student');

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB Connected');
        mainMenu();
    })
    .catch(err => console.error('MongoDB connection error:', err));

// Readline Interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Main Menu
function mainMenu() {
    console.log('\n===== Student Registration CLI =====');
    console.log('1. Register New Student');
    console.log('2. View All Students');
    console.log('3. Exit');
    rl.question('Choose an option: ', async (choice) => {
        switch (choice.trim()) {
            case '1':
                await registerStudent();
                break;
            case '2':
                await viewStudents();
                break;
            case '3':
                console.log('Goodbye!');
                mongoose.connection.close();
                rl.close();
                process.exit(0);
                break;
            default:
                console.log('Invalid option. Try again.');
                mainMenu();
        }
    });
}

// Register a Student
async function registerStudent() {
    let studentData = {};
    rl.question('Student Name: ', (name) => {
        studentData.name = name;
        rl.question('Student Age: ', (age) => {
            studentData.age = parseInt(age);
            rl.question('Department: ', (dept) => {
                studentData.department = dept;
                rl.question('Roll Number: ', async (rollNo) => {
                    studentData.rollNo = rollNo;
                    try {
                        const student = new Student(studentData);
                        await student.save();
                        console.log('✅ Student registered successfully!');
                    } catch (err) {
                        console.error('❌ Error:', err.message);
                    }
                    mainMenu(); // Go back to menu
                });
            });
        });
    });
}

// View All Students
async function viewStudents() {
    const students = await Student.find();
    if (students.length === 0) {
        console.log('No students found.');
    } else {
        console.table(students.map(s => ({
            Name: s.name,
            Age: s.age,
            Department: s.department,
            RollNo: s.rollNo
        })));
    }
    mainMenu(); // Go back to menu
}
