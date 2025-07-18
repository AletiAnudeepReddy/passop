import React from 'react'
import { useRef, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
  const ref = useRef()
  const passwordRef = useRef()
  const [form, setform] = useState({ site: "", username: "", password: "" })
  const [passwordArray, setpasswordArray] = useState([])

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");

    if (passwords) {
      setpasswordArray(JSON.parse(passwords))
    }
  }, [])

  const showPassword = () => {
    if (ref.current.src.includes("icons/noeye.png")) {
      ref.current.src = "icons/eye.png"
      passwordRef.current.type = "password"
    } else {
      passwordRef.current.type = "text"
      ref.current.src = "icons/noeye.png"
    }
  }

  const savePassword = () => {
    if(form.site.length>3 && form.username.length>3 && form.password.length>3){
    setpasswordArray([...passwordArray, {...form,id:uuidv4()}])
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form,id:uuidv4()}]))
    setform({ site: "", username: "", password: "" })
    toast('Password saved', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",

    });
    }else{
      toast('Error: Password not saved', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",

    });
    setform({ site: "", username: "", password: "" })
    }

  }

  const deletePassword=(id)=>{
    let c=confirm("Do you really want to delete this password")
    if (c){
      setpasswordArray(passwordArray.filter(item=>item.id!==id))
      localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item=>item.id!==id)))
      toast('Password deleted!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",

    });
    }
    
  }

  const editPassword=(id)=>{
    setform(passwordArray.filter(item=>item.id===id)[0])
    setpasswordArray(passwordArray.filter(item=>item.id!==id))
  }

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  const copyText = (text) => {
    toast('Copied to Clipboard!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",

    });
    navigator.clipboard.writeText(text)
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"

      />
      <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#affbbb,transparent_1px),linear-gradient(to_bottom,#affbbb,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#affbbb,transparent)]">
        </div>
      </div>
      <div className=' w-auto p-4 md:mycontainer min-h-[90vh]'>
        <h1 className='text-4xl font-bold text-center'>
          <span className='text-green-600'>&lt;</span>
          <span>Pass</span><span className='text-green-600'>OP/&gt;</span>
        </h1>
        <p className='text-green-900 text-lg text-center '>Your own Password Manager</p>
        <div className='text-black flex flex-col p-3 gap-6 items-center'>
          <input value={form.site} onChange={handleChange} placeholder='Enter website URL' className='rounded-full border border-green-600 w-full p-3 py-2' type='text' name='site' />
          <div className='flex flex-col md:flex-row w-full justify-between gap-6'>
            <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='rounded-full border border-green-600 w-full p-3 py-2' type='text' name='username' />
            <div className='relative'>
              <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-full border border-green-600 w-full p-3 py-2' type='password' name='password' />
              <span className='absolute right-[3px] top-[2px] cursor-pointer opacity-40' onClick={showPassword}>
                <img ref={ref} className='p-1 w-10' src='icons/eye.png' alt='eye' />
              </span>
            </div>
          </div>
          <button onClick={savePassword} className='flex justify-center items gap-2 bg-green-300 hover:bg-green-400 rounded-full px-6 py-[6px] w-fit border border-green-500'>
            <lord-icon
              src="https://cdn.lordicon.com/efxgwrkc.json"
              trigger="hover">
            </lord-icon>
            <span className='text-center text-lg font-medium py-[2px]'>Save</span></button>
        </div>
        <div className='passwords'>
          <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
          {passwordArray.length === 0 && <div>No passwords to show</div>}
          {passwordArray.length != 0 && <table className="table-auto w-full rounded-md overflow-hidden mb-4">
            <thead className='bg-green-800 text-white'>
              <tr>
                <th className='py-2'>Site</th>
                <th className='py-2'>Username</th>
                <th className='py-2'>Password</th>
                <th className='py-2'>Actions</th>
              </tr>
            </thead>
            <tbody className='bg-green-200'>
              {passwordArray.map((item, index) => {
                return <tr key={index}>
                  <td className='py-2 text-center border border-white'>
                    <div className='flex items-center justify-center'>
                      <a href={item.site} target='_blank'>{item.site}</a>
                      <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.site) }}>
                        <lord-icon
                          style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                          src="https://cdn.lordicon.com/iykgtsbt.json"
                          trigger="hover">
                        </lord-icon>
                      </div>
                    </div>
                  </td>
                  <td className='py-2 text-center border border-white'>
                    <div className='flex items-center justify-center'>
                      <span>{item.username}</span>
                      <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.username) }}>
                        <lord-icon
                          style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                          src="https://cdn.lordicon.com/iykgtsbt.json"
                          trigger="hover">
                        </lord-icon>
                      </div>
                    </div>
                  </td>
                  <td className='py-2 text-center border border-white'>
                    <div className='flex items-center justify-center'>
                      <span>{item.password}</span>
                      <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.password) }}>
                        <lord-icon
                          style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                          src="https://cdn.lordicon.com/iykgtsbt.json"
                          trigger="hover">
                        </lord-icon>
                      </div>
                    </div>
                  </td>
                  <td className='justify-center text-center py-2 border border-white'>
                    <span className='mx-1 cursor-pointer' onClick={() => { editPassword(item.id) }}>
                      <lord-icon
                          style={{ "width": "25px", "height": "25px"}}
                          src="https://cdn.lordicon.com/gwlusjdu.json"
                          trigger="hover">
                        </lord-icon>
                    </span>
                    <span className='mx-1 cursor-pointer' onClick={() => { deletePassword(item.id) }}>
                      <lord-icon
                          style={{ "width": "25px", "height": "25px"}}
                          src="https://cdn.lordicon.com/skkahier.json"
                          trigger="hover">
                        </lord-icon>
                    </span>
                  </td>
                </tr>
              })}
            </tbody>
          </table>
          }
        </div>
      </div>
    </>
  )
}

export default Manager