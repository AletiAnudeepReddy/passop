import React from 'react'

const Manager = () => {
  return (
    <>
    <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#62c978,transparent)]">
        </div>
    </div>
    <div className=' w-auto mycontainer'>
      <h1 className='text-4xl font-bold text-center'>
        <span className='text-green-600'>&lt;</span>
        <span>Pass</span><span className='text-green-600'>OP/&gt;</span>
      </h1>
      <p className='text-green-900 text-lg text-center '>Your own Password Manager</p>
      <div className='text-black flex flex-col p-3 gap-6'>
        <input className='rounded-full border border-green-500 w-full p-3 py-1' type='text' name='' id=''/>
        <div className='flex w-full justify-between gap-6'>
          <input className='rounded-full border border-green-500 w-full p-3 py-1' type='text'/>
          <input className='rounded-full border border-green-500 w-full p-3 py-1' type='text'/>
        </div>
        <button>Add Password</button>
      </div>
    </div>
    </>
  )
}

export default Manager