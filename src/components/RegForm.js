import React,{useState} from 'react'
import isEmail from 'validator/lib/isEmail';

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

  const[emailError,setEmailError]=useState("")
  const[fnameError,setFnameError]=useState("")
  const[passwordError,setPasswordError]=useState("")
  const[cPasswordError,setCPasswordError]=useState("")
 
  const handleSubmit=event=>{
    event.preventDefault()
    if(!isEmail(email)){
      setEmailError("Email is Invalid")
     }else{
      setEmailError("")
     }
     if(fullName.length < 6){
        setFnameError("FullName is invalid")
     }else{
      setFnameError("")
     }
     if(password.length < 6){
      setPasswordError("Password is invalid")
     }else{
      setPasswordError("")
     }


     if(confirmPassword !==password){
      setCPasswordError("Both Password and ConfirmPassword must match")
     }else{
      setCPasswordError("")
     }
     if(confirmPassword ===""){
      setCPasswordError("Please retype password")
     }

  }

  return (
    <div className='mx-auto w-full md:w-[75%]  p-3'>
    <div className='border-2 border-stone-100  '>
      <input type="text" placeholder='FullName' name='fullName' value={fullName} onChange={handleChange} className='border-1 border-stone-400 focus:outline-none focus:bg-blue-100 w-full p-1' />
    </div>
    {fnameError && <p className='text-red-600 p-2 text-sm'>{fnameError}</p>}

 
    <div className='border-2 border-stone-100 mt-2 '>
      <input type="email" placeholder='Email Address' name='email' value={email} onChange={handleChange} className='border-1 border-stone-400 focus:outline-none focus:bg-blue-100 w-full p-1' />     
    </div>
    {emailError && <p className='text-red-600 p-2 text-sm'>{emailError}</p>}

    <div className='border-2 border-stone-100 mt-2 '>
      <input type="password" placeholder='Password' name='password' value={password} onChange={handleChange} className='border-1 border-stone-400 focus:outline-none focus:bg-blue-100 w-full p-1' />
    </div>
    {passwordError && <p className='text-red-600 p-2 text-sm'>{passwordError}</p>}

    <div className='border-2 border-stone-100 mt-2 '>
      <input type="password" placeholder='Confirm Password' name='confirmPassword' value={confirmPassword} onChange={handleChange} className='border-1 border-stone-400 focus:outline-none focus:bg-blue-100 w-full p-1' />
    </div>
    {cPasswordError && <p className='text-red-600 p-2 text-sm'>{cPasswordError}</p>}

    <div className=' mt-2 text-center'>
     <button className='px-4 py-2 bg-stone-300 text-stone-900 font-semibold w-[50%] md:w-[40%]' onClick={handleSubmit}>Submit</button>
    </div>
    </div> 
  )
}

export default RegForm