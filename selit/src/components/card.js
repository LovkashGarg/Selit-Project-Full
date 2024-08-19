import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const card = () => {
  const handleorderreacttoast=(event)=>{
// alert("Order Placed ");
// toast.success("Product Selected")
let Bookname=document.getElementById('Description').innerHTML;
let Authorname=document.getElementById('Authorname').innerHTML;
let Bookprice=document.getElementById('Bookprice').innerHTML;
toast.success("Selected" + Bookname + "\n" +Authorname + Bookprice);
  }
  // const [orderplacedlist, setorderplacedlist] = useState("No order placed till Now");
  return (
    <>
    <div className="outer  flex w-[1200px] mt-[30px]">
<div className="card  h-[200px] w-[950px] rounded-[20px] border-4 border-sky-400 flex ml-[100px] ">
    <div className="left">
        <img className='mt-[10px] mx-[20px]  border-4 border-black-300  w-[200px] h-[150px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt1RSv5z_-BZmO4ZcNdL9e1ENoHsmoh4uGdQ&usqp=CAU" alt="Book"  />
    </div>
    <div className="right w-[1000px] h-[200px] flex flex-col align-center justify-center px-[40px]">
      <div className="description-name text-[35px]" id="Description">Hindustan ki Kahani</div>
      <div className="Author-name" id="Authorname">Premchand dyal sharma</div>
      <div className="Price flex">
<div className="current-price text-red-400 text-[35px] mx-[10px]" id="Bookprice">₹399</div>
<div className="mrp-price  text-[23px] mx-[10px]">MRP : ₹699</div>
<div className="discount  text-[23px] mx-[10px]">(45% off)</div>
      </div>
      <button className="selectproductbutton  text-white text-[30px] bg-green-500 border-green-500 border-4  mx-[20px] w-[130px] rounded-[10px] h-[10px] " onClick={handleorderreacttoast}>Add Item</button>
      <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"/>
    </div>
</div>

</div>
</>
  )
}

export default card