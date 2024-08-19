import React, { useState } from 'react'

const Sellbookpage = () => {
  // imgInp.onchange = evt => {
  //   const [file] = imgInp.files
  //   if (file) {
  //     blah.src = URL.createObjectURL(file)
  //   }
  // }
    const [Publicationvalue,setPublicationValue]=useState(2012);
  return (
    <>
    <div className="sellbookpage w-[100vw] flex flex-col items-center">
    <div className='sellusbooktitle text-[34px] text-red-500 my-[60px]'>Sell Books </div>
    <div className="sellusbookformcard flex flex-col  justify-center items-center w-[500px] h-[400px] rounded-[20px] border-blue-400 border-[4px] ">
       <div className='text-green-400 text-[30px]'>You are A true Environmentalist!!</div> 
       <div>UserName: <input type="text" placeholder='Username' /></div> 
       <div>BookName: <input type="text" placeholder='BookName' /></div> 
       <div className='w-[400px]'>
       <div className='flex justify-evenly items-center'><div><input type="checkbox" />Missing Pages</div><div><input type="checkbox" />Binding</div></div>
       <div className='flex justify-evenly items-center'><div><input type="checkbox" />Index page Availability/</div><div><input type="checkbox" />Pen/Marker marks</div></div>
       <div className='flex justify-evenly items-center'><div><input type="checkbox" />Tempering of Mrp </div><div><input type="checkbox" />Tempering of Edition</div></div>
       <div className='flex justify-evenly items-center'><div><input type="checkbox" />Images Cut out</div><div><input type="checkbox" />Oil Stains Marks</div></div>
       <div className='flex justify-evenly items-center'><div><input type="checkbox" />ISBN Number</div><div><input type="checkbox" />page Quality Proper</div></div>
       </div>
       <div className='flex'>Image: <input type="file" id="imgInp"  accept="image/*"  width={"30px"} height={"40px"}  /> <img src="#" alt="Image" id="blah" /></div> 
       <div>Publication Year: <input type="range" min={"2012"}  max={"2024"} onChange={(event)=>{
        setPublicationValue(event.target.value)
       }} />{Publicationvalue}</div> 
     <div> Video : <input type="file" accept='video/*' /></div> 
        < button type='submit' className='mt-[20px] text-[25px] bg-green-600 text-white w-[200px] rounded-[20px] h-[50px] '>Submit</button>
         </div>
         </div>
    </>
  )
}

export default Sellbookpage