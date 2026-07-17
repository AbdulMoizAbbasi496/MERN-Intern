// const express = require('express');
// const path = require('path');
// const app = express();
// const PORT = 3000;

// app.use(express.json());
// app.use(express.static(path.join(__dirname, 'public')));

// // In-Memory Data
// let students = [
//     { id: 1, name: 'John Doe' },
//     { id: 2, name: 'Jane Smith' }
// ];

// // GET All Students
// app.get('/api/students', (req, res) => {
//     res.json(students);
// });

// // POST Add Student
// app.post('/api/students', (req, res) => {
//     const newStudent = { id: Date.now(), name: req.body.name };
//     students.push(newStudent);
//     res.status(201).json(newStudent);
// });

// // PUT Update Student
// app.put('/api/students/:id', (req, res) => {
//     const studentId = parseInt(req.params.id);
//     const student = students.find(s => s.id === studentId);
//     if (!student) return res.status(404).json({ error: 'Student not found' });

//     student.name = req.body.name;
//     res.json(student);
// });

// // DELETE Student
// app.delete('/api/students/:id', (req, res) => {
//     const studentId = parseInt(req.params.id);
//     students = students.filter(s => s.id !== studentId);
//     res.json({ message: 'Student deleted' });
// });

// app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
