const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors')

const Patient = require('./db/PatientSchema.js')

const app = express()

// Middleware
app.use(cors()); // Enable CORS for requests from frontend
app.use(express.json()); // Parse incoming JSON requests
app.use(express.static(('public')))


// Main Form route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"public","index.html"))
})


//Get Patient List
app.get("/patientlist", (req, res) => {
    Patient.find()
    .then((patients) => res.send(patients))
    .catch(err => console.log(err))
})


// Save to Database Fn
app.post("/", (req, res) => {

    const PatientDetails = req.body
    const newPatient = new Patient(PatientDetails)

    newPatient.save()
    .then(patient => console.log(`${patient.patientName} saved successfully`))
    .catch(err => console.log(err))
      
})


// Mongoose MongoDB connection
mongoose.connect('mongodb+srv://yamboygenius:Binduk%40123@cluster0.j5u1mcp.mongodb.net/PatientsDetails?retryWrites=true&w=majority')
.then(()=> console.log('Mongoose Connection established...'))
.catch((err) => console.log(err))





const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running sucessfully on PORT ${PORT}`))