import React,{useState} from 'react'

const RegForm = () => {

  const[formState,setFormState]=useState({
    fullName:'',
    email:'',
    password:'',
    confirmPassword:''
  })
  const{fullName,email,password,confirmPassword}=formState

  const handleChange=event=>{
    const{name,value}=event.target
    setFormState({
      ...formState,[name]:value
    })
  }

  return (
    <div className='mx-auto w-full md:w-[75%]  p-3'>
    <div className='border-2 border-stone-100 mb-2 '>
      <input type="text" placeholder='FullName' name='fullName' value={fullName} onChange={handleChange} className='border-1 border-stone-400 focus:outline-none focus:bg-blue-100 w-full p-1' />
    </div>

    <div className='border-2 border-stone-100 mb-2 '>
      <input type="email" placeholder='Email Address' name='email' value={email} onChange={handleChange} className='border-1 border-stone-400 focus:outline-none focus:bg-blue-100 w-full p-1' />
    </div>

    <div className='border-2 border-stone-100 mb-2 '>
      <input type="password" placeholder='Password' name='password' value={password} onChange={handleChange} className='border-1 border-stone-400 focus:outline-none focus:bg-blue-100 w-full p-1' />
    </div>

    <div className='border-2 border-stone-100 mb-2 '>
      <input type="password" placeholder='Confirm Password' name='confirmPassword' value={confirmPassword} onChange={handleChange} className='border-1 border-stone-400 focus:outline-none focus:bg-blue-100 w-full p-1' />
    </div>

    <div className=' mt-2 text-center'>
     <button className='px-4 py-2 bg-stone-300 text-stone-900 font-semibold w-[50%] md:w-[40%]'>Submit</button>
    </div>
    </div>
  )
}

export default RegForm