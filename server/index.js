const express=require('express');
const app=express();

const connectToMongo =require('./Database/db');

const cors=require('cors');

const payment=require('./Routes/payment');
connectToMongo();
const port = process.env.PORT|| 6000

// middleware
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send('Lovkash Garg')
})
app.use('/api/payment',payment);


app.listen(port,()=>{
    console.log("Listening at Port 6000")
})