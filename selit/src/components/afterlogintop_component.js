import React from 'react'
import maleavatar from '../maleavatar.jpg'
import femaleavatar from '../femaleavatar.png'
const Afterlogintop_component = () => {
  return (
    <div className='afterlogin flex items-center'>
        <img className='rounded-[20px] w-[80px] h-[65px] ' src={femaleavatar} alt="maleavatar"  />
        <div className='username-login-inned text-[25px] text-blue-500' >Shruti Garg</div>
    </div>
  )
}

export default Afterlogintop_component