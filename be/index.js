const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const app = express();
const PORT = 4000;
const userRoute = require('./routes/users')
const {errorHandling, handleURLNotFound} = require('./helper/')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'))
app.use(cors())


app.use('/users', userRoute)

app.use(handleURLNotFound)

app.use(errorHandling);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})