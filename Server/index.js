
import  express  from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from 'dotenv'
import cors from 'cors'
import route from "./routes/user.route.js";

const app = express()
app.use(bodyParser.json())
app.use(cors())
dotenv.config()

app.use('/api', route)

const PORT = process.env.PORT || 7000
const URL = process.env.MONGOURL

mongoose.connect(URL).then(()=>{
    console.log("DB is connected Successfully");

    app.listen(PORT , ()=>{
        console.log(`Server is listen on ${PORT} port `);
    })
}).catch(error =>console.log(error))




