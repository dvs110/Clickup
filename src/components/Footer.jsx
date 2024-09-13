import React from 'react'
import pantheonicon from "../../public/clickup_icon.svg"
function Footer() {
  return (
    <div className='flex justify-around items-center bg-gray-100 h-[80px]'>
      <div className='flex'>
        <img src={pantheonicon} alt="icon" className=' w-[30px]' />
        <p className=' ml-4 font-semibold'>The everything app for work</p>
      </div>
      <div className=' w-[30vw] flex justify-between items-center'>
        <div>© 2024 Pantheon</div>
        <div>Security</div>
        <div>Privacy</div>
        <div>Terms</div>
      </div>
    </div>
  )
}

export default Footer
