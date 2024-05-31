import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Signin() {
const [formData, setFormData] = useState({
 email: "",
 password: ""
});
const navigate = useNavigate();


const handleChange = (e) =>{
    setFormData({...formData, [e.target.name]: e.target.value});
}

const handleSubmit = (e) =>{

  if(formData.email.length > 0 && formData.password.length > 0){
     console.log("Signed in")
     navigate("/")
    }
    
} 


useEffect(() => {
  console.log(formData);
}, [formData]);

  return (
    <>
   <h1>Sign in</h1>
   <form onSubmit={(e)=> e.preventDefault()}>
    <input required type="email" placeholder='Enter your email' name='email' onChange={handleChange} />
    <input required type="password" placeholder='Enter your password' name='password' onChange={handleChange} />
    <input type="submit" value={"Sign in"} onClick={handleSubmit} />
   </form>
   
    <Link to = {"/"}>
    <button>Go to home page</button>
 </Link>
 </>
  )
}
