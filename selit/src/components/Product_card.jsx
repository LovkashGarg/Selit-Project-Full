import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function ProductCard(props) {
  const [amount, setAmount] = useState(350);
  const handlePayment = async () => {
    try {
      console.log("Hello" + "http://localhost:4000");
      const res = await fetch(`http://localhost:4000/api/payment/order`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          amount,
        }),
      });
      const data = await res.json();
      console.log(data);
      handlePaymentVerify(data.data);
    } catch (eror) {
      console.error(eror);
      console.log(eror);
    }
  };
  // handlepayment verify function
  const handlePaymentVerify = async (data) => {
    const options = {
      key: process.env.RAZORPAY_KEY_ID,
      amount: data.amount,
      currency: data.currency,
      name: "Random Kumar",
      description: "Testing the app",
      order_id: data.id,
      handler: async (response) => {
        // console.log("response" + response);
        try {
          const res = await fetch(`http://localhost:4000/api/payment/verify`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });

          const verifyData = await res.json();
          if (verifyData.message) {
            toast.success(verifyData.message);
          } else {
            toast.error("Verification failed");
          }
        } catch (error) {
          console.log(error);
        }
      },
      theme:{
        color:"#5f63b8"
      }
    };
    const rzp1=new window.Razorpay(options);
    rzp1.open();
  };
  return (
    <div className="my-[30px] max-w-sm mx-[55px] bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        className=" w-[300px]  h-[150px]"
        src={props.image_url}
        alt="Shirt"
      />
      <div className="p-4">
        <h2 className="text-gray-900 text-xl font-bold">Men's Casual Shirt</h2>
        <div className="flex items-center justify-between mt-4">
          <span className="text-gray-900 font-bold text-xl"> {props.amount} </span>
          <button
            onClick={handlePayment}
            className="px-3 py-1 bg-green-500 text-white  font-bold  rounded-[20px] "
          >
            Buy Now
          </button>
          <Toaster />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
