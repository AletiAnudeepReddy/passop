import React from 'react'
import { useRef } from 'react';

const Manager = () => {
  const ref=useRef()
  const showPassword=()=>{
    alert('Show the Password');
    if(ref.current.src.includes("icons/noeye.png")){
      ref.current.src="icons/eye.png"
    }else{
      ref.current.src="icons/noeye.png"
    }
  }
  return (
    <>
    <div class="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#93f6a8,transparent_1px),linear-gradient(to_bottom,#93f6a8,transparent_1px)] bg-[size:6rem_4rem]">
        <div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#93f6a8,transparent)]">
        </div>
    </div>
    <div className=' w-auto mycontainer'>
      <h1 className='text-4xl font-bold text-center'>
        <span className='text-green-600'>&lt;</span>
        <span>Pass</span><span className='text-green-600'>OP/&gt;</span>
      </h1>
      <p className='text-green-900 text-lg text-center '>Your own Password Manager</p>
      <div className='text-black flex flex-col p-3 gap-6 items-center'>
        <input placeholder='Enter website URL' className='rounded-full border border-green-600 w-full p-3 py-1' type='text' name='' id=''/>
        <div className='flex w-full justify-between gap-6'>
          <input placeholder='Enter Username' className='rounded-full border border-green-600 w-full p-3 py-1' type='text' name='' id=''/>
          <div className='relative'>
            <input placeholder='Enter Password' className='rounded-full border border-green-600 w-full p-3 py-1' type='text' name='' id=''/>
            <span className='absolute right-[3px] top-[2px] cursor-pointer opacity-40' onClick={showPassword}>
              <img ref={ref} className='p-1' width={32} src='icons/eye.png' alt='eye'/>
            </span>
          </div>
        </div>
        <button className='flex justify-center items gap-2 bg-green-300 hover:bg-green-400 rounded-full px-6 py-[6px] w-fit border border-green-500'>
        <lord-icon
          src="https://cdn.lordicon.com/efxgwrkc.json"
          trigger="hover">
        </lord-icon>
        <span className='text-center font-medium py-[2px]'>Add Password</span></button>
      </div>
    </div>
    </>
  )
}

export default Manager