import React,{useState} from 'react'
import { MdCopyright } from "react-icons/md";
const Footer = () => {
  const [numberoforder,setnumberoforder]=useState(4);
  return (
    <>
    <footer className='bg-slate-300 flex flex-row justify-evenly font-medium h-[250px] mt-[40px] items-center'>
      <div className="progress-bar">
        <div className="progress-bar-round w-[200px] h-[200px] rounded-full bg-green-600 flex flex-col justify-center items-center text-white  border-blue-400 border-[7px]"><div><img src="https://i.pinimg.com/originals/c6/2e/e4/c62ee4559ca391a822f0a19a039763aa.png" alt="Tree" className='w-[120px] h-[90px]' /></div><div className='text-[20px]'>{numberoforder} Trees Saved</div></div>
      </div>
<div className="navigations flex flex-col bg-slate-200 p-[50px] rounded-[20px]">
<a href="#">Home</a>
<a href="#">About us</a>
<a href="#">Cart</a>
<a href="#">Services</a>
</div>
<div className="otherprojects flex flex-col bg-slate-200 p-[50px] rounded-[20px]">
<a href="#">Opshop</a>
<a href="#">Textutils</a>
<a href="#">Loga(Food Delivery)</a>
<a href="#">More</a>
</div>
<div className="contactoptions flex flex-col bg-slate-200 p-[50px] rounded-[20px]">
<a href="#">aggarwallovkesh555@gmail.com</a>
<a href="#">aggarwallovkash10212(Instagram)</a>
<a href="#">Lovkash garg(Telegram)</a>
<a href="#">+919896316033(Contact Number)</a>
<a href="#">More</a>
</div>
    </footer>
    <div className='block flex justify-end pr-[20px] items-center bg-slate-300 text-[20px]'> <MdCopyright/>2024 reserved under copyright laws of India</div>
    </>
  )
}

export default Footer