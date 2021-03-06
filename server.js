const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./config/db')


// Route Files
const bootcamps = require('./routes/bootcamps')

// Load env vars
dotenv.config({ path: './config/config.env' })

// connecting to database
connectDB()

const app = express()

// set middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}


// Mount  routes
app.use('/api/v1/bootcamps', bootcamps)


const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`));