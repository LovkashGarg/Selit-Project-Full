const express=require('express');
const Razorpay =require('razorpay');
const router=express.Router();
const dotenv = require('dotenv');
const crypto=require('crypto');
dotenv.config();
const PaymentSchema = require('../Models/payment');

router.use(express.json());

const razorpayInstance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET,
});

router.get('/getPayment',(req,res)=>{
    res.json('Payment Details');
})

// router 1 create order api using post method http :// localhost:4000/api/payment/order
router.post('/order',(req,res)=>{
    const { amount } = req.body; // Extract amount from request body

    if (!amount) {
        return res.status(400).json({ message: 'Amount is required' });
    }

    try{
        const options={
            amount:Number(amount*100),
            currency:"INR",
            receipt:crypto.randomBytes(10).toString("hex")

        }
        razorpayInstance.orders.create(options,(error,order)=>{
            if(error){
                console.log(error);
                return res.status(500).json({message:"Something went Wrong" });
            }
            // if error aaya to uper vala return hoga else order object return hoga 
            console.log(order)
            res.status(200).json({data:order});
            });
    }
    catch(error){
        console.log(error);
        console.error(error);

    }
})
router.post('/verify',async (req,res)=>{
    const {name,razorpay_order_id,razorpay_payment_id,razorpay_signature,amount}=req.body;

    // console to see
    console.log(req.body)

    try {
        const sign = `${razorpay_order_id}|${razorpay_payment_id}`;

     // create a expected sign
     const expectedsign=crypto.createHmac('sha256',process.env.RAZORPAY_SECRET)
     .update(sign.toString())
     .digest("hex");

     console.log(razorpay_signature === expectedsign);

     const isAuthentic=expectedsign ===razorpay_signature;

     //conditon
     if(isAuthentic){
        const payment=new PaymentSchema({
            name,
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
            amount,
        });
        // saving the payment in the database 

        await payment.save();
        res.json({
            message: "Payment Successfully"
        });
     }

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error!" });
        console.log(error);
    }
})
module.exports= router;