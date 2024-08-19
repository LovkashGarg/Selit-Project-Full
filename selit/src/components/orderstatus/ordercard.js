import React from 'react'

const ordercard = () => {
  return (
    <>
    <div className="ordercard flex border-black m-[30px] rounded-[20px] border-[2px] w-[800px]">
      <div className="left">
        <img className='mt-[10px] mx-[20px]  border-4 border-black-300  w-[150px] h-[160px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt1RSv5z_-BZmO4ZcNdL9e1ENoHsmoh4uGdQ&usqp=CAU" alt="Book" />
      </div>
      <div className="middle w-[450px] h-[200px] flex flex-col align-center justify-center px-[40px]">
        <div className="description-name text-[30px]">Hindustan ki Kahani</div>
        <div className="Author-name"></div>
        <div className="Price flex">
          <div className="current-price text-red-400 text-[35px] mx-[10px]">₹399</div>
          <div className="mrp-price  text-[23px] mx-[10px]">MRP : ₹699</div>
        </div>
        </div>
        <div className="right flex flex-col items-center justify-center">
          <div className="status">Status</div>
          <div className="statusdetail border-[2px] rounded-[30px] border-gray-400 px-[20px]">Order Pending</div>

        </div>
        </div>
      </>
      )
}

      export default ordercard