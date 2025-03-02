// .ENV 
require("dotenv").config()

import express from 'express'
import config from 'config'
import router from './router';

const app = express()

// json middleware
app.use(express.json())

//Bb
import db from '../../config/db'

//app port
const port =config.get<number>("port");

// looger
import Logger from '../../config/logger'

// middlewares
import morganMiddleware from './middleware/middleware';



//import Routes
app.use("/api/", router)

//import Routes Middleware
app.use("/api/", morganMiddleware)


app.listen(port, async()=>{
  await db();
  Logger.info(`Aplicação está funcionando na porta ${port}`)

})