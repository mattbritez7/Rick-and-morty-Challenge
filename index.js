const express =require('express')
const charcounterRoutes = require('./src/routes/charcounter.routes.js')
const morgan = require('morgan')


const app = express()

app.use('/charcounter', charcounterRoutes)


app.use(morgan())

app.listen('4000', () =>{
    console.log('listening on por 4000')
})



