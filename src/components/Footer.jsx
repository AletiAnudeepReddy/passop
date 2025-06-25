import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-800 w-full text-white flex flex-col justify-center items-center'>
        <div className='logo font-bold text-white text-2xl'>
          <span className='text-green-500'>&lt;</span>
          <span>Pass</span><span className='text-green-500'>OP/&gt;</span>
        </div>
        <div className='flex justify-center items-center'>Created with <span className='font-bold text-2xl px-1 text-red-500'>&hearts;</span> by Anudeep</div>
    </div>
  )
}

export default Footer