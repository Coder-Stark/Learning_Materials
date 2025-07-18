import React, { useState } from 'react'

const Form = () => {
//   const [name, setName] = useState();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPass: ''
  });
  
  console.log(formData.name)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(formData.name && formData.email && formData.password && formData.confirmPass){
        if(formData.password === formData.confirmPass){
            alert("Signup Successfully");
        }else{
            alert("Password && Confirm Password must be same")
        }
    }else{
        alert('All Fields Required');
    }
  }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            
            {/* 
                <div>
                    <p className='fieldName'>Name</p>
                    <input 
                        type="text" 
                        onChange={(e)=>setName(e.target.value)} />
                    <p className='data'>{name ? "" : "Name is Required"}</p>
                </div> 
            */}
            
            <div>
                <p className='fieldName'>Name</p>
                <input 
                    type="text" 
                    onChange={handleChange} 
                    name="name"
                    value={formData.name} 
                />
                <p className={formData.name ? "data" : "noData"}>{formData.name ? "" : "Name is required" }</p>
            </div>
            <div>
                <p className='fieldName'>Email</p>
                <input 
                    type="email" 
                    onChange={handleChange}
                    name='email'
                    value={formData.email} 
                />
                <p className={formData.email ? "data" : "noData"}>{formData.email ? "" : "Email is required" }</p>
            </div>
            <div>
                <p className='fieldName'>Password</p>
                <input 
                    type="password" 
                    onChange={handleChange}
                    name='password'
                    value={formData.password} 
                />
                <p className={formData.password ? "data" : "noData"}>{formData.password ? "" : "Password is required" }</p>
            </div>
            <div>
                <p className='fieldName'>Confirm Password</p>
                <input 
                    type="password" 
                    onChange={handleChange}
                    name='confirmPass'
                    value={formData.confirmPass} 
                />
                <p className={formData.confirmPass ? "data" : "noData"}>{formData.confirmPass ? "" : "Confirm Password is required" }</p>
            </div>
            <div>
                <button>Signup</button>
            </div>
        </form>
    </>
  )
}

export default Form