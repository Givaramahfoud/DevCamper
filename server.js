const express = require('express')
const dotenv = require('dotenv')

// Load env vars
dotenv.config({ path: './config/config.env' })

const app = express()

app.get('/api/v1/bootcamps', (req, res) => {
    res.status(200).json({ success: true, msg: 'show all bootcamps' })
})

app.get('/api/v1/bootcamps:id', (req, res) => {
    res.status(200).json({ success: true, msg: 'get specific bootcamp' })
})

app.post('/api/v1/bootcamps', (req, res) => {
    res.status(200).json({ success: true, msg: 'create bootcamp' })
})

app.put('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `update bootcamp ${req.params.id}` })
})

app.delete('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({ success: true, msg: 'delete bootcamp' })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`));