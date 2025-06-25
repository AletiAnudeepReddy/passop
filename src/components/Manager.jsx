import React from 'react'
import { useRef,useState,useEffect } from 'react';

const Manager = () => {
  const ref=useRef()
  const [form, setform] = useState({site:"",username:"",password:""})
  const [passwordArray, setpasswordArray] = useState([])

  useEffect(() => {
    let passwords=localStorage.getItem("passwords");
    
    if(passwords){
      setpasswordArray(JSON.parse(passwords))
    }
  }, [])
  
  const showPassword=()=>{
    alert('Show the Password');
    if(ref.current.src.includes("icons/noeye.png")){
      ref.current.src="icons/eye.png"
    }else{
      ref.current.src="icons/noeye.png"
    }
  }

  const savePassword =() => { 
    setpasswordArray([...passwordArray,form])
    localStorage.setItem("passwords",JSON.stringify([...passwordArray,form]))
    console.log(passwordArray)
  }

  const handleChange=(e) => {
    setform({...form,[e.target.name]:e.target.value})
  }

  return (
    <>
    <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#93f6a8,transparent_1px),linear-gradient(to_bottom,#93f6a8,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#93f6a8,transparent)]">
        </div>
    </div>
    <div className=' w-auto mycontainer'>
      <h1 className='text-4xl font-bold text-center'>
        <span className='text-green-600'>&lt;</span>
        <span>Pass</span><span className='text-green-600'>OP/&gt;</span>
      </h1>
      <p className='text-green-900 text-lg text-center '>Your own Password Manager</p>
      <div className='text-black flex flex-col p-3 gap-6 items-center'>
        <input value={form.site} onChange={handleChange} placeholder='Enter website URL' className='rounded-full border border-green-600 w-full p-3 py-1' type='text' name='site'/>
        <div className='flex w-full justify-between gap-6'>
          <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='rounded-full border border-green-600 w-full p-3 py-1' type='text' name='username'/>
          <div className='relative'>
            <input value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-full border border-green-600 w-full p-3 py-1' type='text' name='password'/>
            <span className='absolute right-[3px] top-[2px] cursor-pointer opacity-40' onClick={showPassword}>
              <img ref={ref} className='p-1' width={32} src='icons/eye.png' alt='eye'/>
            </span>
          </div>
        </div>
        <button onClick={savePassword} className='flex justify-center items gap-2 bg-green-300 hover:bg-green-400 rounded-full px-6 py-[6px] w-fit border border-green-500'>
        <lord-icon
          src="https://cdn.lordicon.com/efxgwrkc.json"
          trigger="hover">
        </lord-icon>
        <span className='text-center font-medium py-[2px]'>Add Password</span></button>
      </div>
      <div className='passwords'>
        <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
        {passwordArray.length===0 && <div>No passwords to show</div>}
        {passwordArray.length!=0 && <table className="table-auto w-full rounded-md overflow-hidden">
          <thead className='bg-green-800 text-white'>
            <tr>
              <th className='py-2'>Site</th>
              <th className='py-2'>Username</th>
              <th className='py-2'>Password</th>
            </tr>
          </thead>
          <tbody className='bg-green-100'>
            <tr>
              <td className='py-2 text-center border border-white w-32'>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td className='py-2 text-center border border-white w-32'>Malcolm Lockyer</td>
              <td className='py-2 text-center border border-white w-32'>1961</td>
            </tr>
            <tr>
              <td className='py-2 text-center border border-white w-32'>Witchy Woman</td>
              <td className='py-2 text-center border border-white w-32'>The Eagles</td>
              <td className='py-2 text-center border border-white w-32'>1972</td>
            </tr>
            <tr>
              <td className='py-2 text-center border border-white w-32'>Shining Star</td>
              <td className='py-2 text-center border border-white w-32'>Earth, Wind, and Fire</td>
              <td className='py-2 text-center border border-white w-32'>1975</td>
            </tr>
          </tbody>
        </table>
        }
      </div>
    </div>
    </>
  )
}

export default Manager