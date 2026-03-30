import express from 'express'
import bodyParser from 'body-parser';
const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
import {PORT} from './config/serverconfig.js'


import apiRoutes from './Routes/index.js'
import connect from './db/database.js';

app.use('/api',apiRoutes)
app.listen(PORT,async()=>{
    console.log("server started");
    await connect();
    console.log('Mongodb connected');
    

    
    
    
})