import React from 'react'
import { FaCaretLeft } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";
const Carousel = (props) => {
    const leftbutton=()=>{
    
    }
    const rightbutton=()=>{

    }
    const noofbooks = [
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        imageUrl: "https://m.media-amazon.com/images/I/81af+MCATTL._AC_UY218_.jpg",
        price: 1099
      },
      {
        title: "1984",
        author: "George Orwell",
        imageUrl: "https://m.media-amazon.com/images/I/71kxa1-0mfL._AC_UY218_.jpg",
        price: 899
      },
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        imageUrl: "https://img.etimg.com/photo/msid-99722438,imgsize-267878/HarryPotterandthePrisonerofAzkaban.jpg",
        price: 1299
      },
      {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        imageUrl: "https://m.media-amazon.com/images/I/81A-mvlo+QL._AC_UY218_.jpg",
        price: 999
      },
      {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        imageUrl: "https://m.media-amazon.com/images/I/81OthjkJBuL._AC_UY218_.jpg",
        price: 1199
      }
    ];
    
    
  return (
    <div className='caraousel w-[100vw] flex rounded-[10px]  items-center h-[300px] overflow-x-scroll scrollbar-hide  mt-[30px] mx-[20px] px-[15px] shadow-2 shadow-black'>
        <button className='absolute  left-[10px]' onClick={leftbutton}><FaCaretLeft className='h-[50px]' /></button>
        {noofbooks.map((book)=>(
        <div className='main-carousel  w-[300px] h-[250px] mx-[20px] flex'>
        <div className=' items flex flex-col font-semibold w-[250px] rounded-[40px] border-[2px] border-black items-center p-[20px]' >
            <img src={book.imageUrl} className='w-[200px] rounded-[10px] h-[130px]' alt="Carouselbookimage" />
           <div className='text-blue-400 text-[20px] '>{book.title}</div>
           <div className='text-black text-[20px] '>{book.author}</div>
           <div className='text-red-400 text-[25px] '>₹{book.price}</div>
        </div>
        </div>
            ))}
        <button className='absolute right-[15px]' onClick={rightbutton}><FaCaretRight className='h-[50px]' /></button>

    </div>
  )
}

export default Carousel