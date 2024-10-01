import React from 'react'

function Popup(props) {
  return (props.trigger) ? (
    <div className=''>
      <div className='z-[1055] overflow-y-auto overflow-x-hidden outline-none'>
      
        <button className=' w-7 h-7 -bottom-7  relative  bg-black text-white' onClick={() => props.setTrigger(false)}>*</button>
        {props.children}
      </div>
    </div>
  ) : ""
}

export default Popup