// import express from 'express';
// import path from 'path'
// import data from './data.json';
const express = require('express');
const path = require('path');
let students = require('./students.json');
const fs = require('fs')

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())
// app.use(express.static(path.join(__dirname, 'public')))

// GET
app.get('/', (req, res) => {
    res.send("<h1>Welcome ! This is Home Page - Served In Case static file is not loaded </h1>")
})
app.get('/api/students', (req, res) => {
    res.send(students)
})

// POST
app.post('/api/students', async (req, res) => {
    const body = req.body
    console.log("Form data : ", body);

    let student = { name: body.name, department: body.department, reg_no: body.reg_no }
    students.push(student)
    await fs.writeFile('students.json', JSON.stringify(students, null, 2), (err) => {
        if (err) console.log("Some error occured");
        console.log("Student Saved Successfully");
    })
    res.status(200).json({ msg: "Student Added successfully!" })
})

// PUT
app.put('/api/students/:rollNo', async (req, res) => {
    try {
        const body = req.body;
        const rollNo = req.params.rollNo;

        let index = students.findIndex(student => {
            let student_reg = student.reg_no.split('-')[2];
            return student_reg === rollNo;
        });


        if (index === -1) {
            return res.status(404).json({ msg: `Student with reg-no ${rollNo} not found` });
        }

        students[index] = {
            name: body.name,
            department: body.department,
            reg_no: body.reg_no
        };

        fs.writeFile('students.json', JSON.stringify(students, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ msg: `ERROR OCCURED : ${err.message}` });
            }
            console.log("Student updated Successfully");
            res.status(200).json({ msg: `Student with reg-no ${rollNo} updated successfully!` });
        });

    } catch (err) {
        res.status(500).json({ msg: `ERROR :  ${err.message}` });
    }
});

// DELETE
app.delete('/api/students/:rollNo', async (req, res) => {
    try {
        const rollNo = req.params.rollNo;
        let index = students.findIndex(student => {
            let student_reg = student.reg_no.split('-')[2];  // "001"
            return student_reg === rollNo;  // return boolean
        });


        if (index === -1) {
            return res.status(404).json({ msg: `Student with reg-no ${rollNo} not found` });
        }

        students.splice(index,1)

        fs.writeFile('students.json', JSON.stringify(students, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ msg: `ERROR OCCURED : ${err.message}` });
            }
            console.log("Student DELETED Successfully");
            res.status(200).json({ msg: `Student with reg-no ${rollNo} DELETED successfully!` });
        });

    } catch (err) {
        res.status(500).json({ msg: `ERROR :  ${err.message}` });
    }
});


app.listen(PORT, () => {
    console.log(`Server Running at : http://localhost:${PORT}`);
})

