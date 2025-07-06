import express from 'express';
import {Dbconnect} from  './lib/mongodb.js';
import cors from 'cors';

const PORT  = 8080;
const app = express();

app.use(express.json())

app.use(cors({
    origin : "*",
    methods :['POST' ,'GET' ,'DELETE','PUT','PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'] 
}))

Dbconnect().then(()=>{
    console.log("Database Connected Successfully");
}).catch((error)=>{
    console.log("Disconnection with Database" , error.message);
})

import transactionroutes from  './routes/transaction.routes.js';

app.use('/api/v1/transaction' , transactionroutes);


app.listen(PORT , ()=>{
console.log(`Server listening at Port Number ${PORT}`)
})