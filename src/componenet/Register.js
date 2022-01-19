import React, { useState} from 'react';
import Nav from "./Nav"
import Animals from "./Animals"
const Register = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState();
    const [regStatut, setRegStatut] = useState(false);


    const RegisterMem = async()=>{
        let newMember = {
            email:email,
            username:username,
            password:password,
            phone:phone
        }
    
        fetch('http://127.0.0.1:8000/api/member',{
            method:"POST",
            body:JSON.stringify(newMember),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(resp=> resp.json())
        .then((data)=>{
           if(data.message =="data has been save"){
               setRegStatut(true)
           }
        })
    
    }
    if(regStatut){
     return <Animals/>
    }
    return (
        <div>
            <Nav/>
            <div className='reg-container'>
            <div className='register'>
                <h2>REGISTRATION</h2>
                <div className='inputs'>
                    <input type="email" onChange={(e)=>setEmail(e.target.value)}  placeholder='Email...' />
                    <input type="text" onChange={(e)=>setUsername(e.target.value)}  placeholder='Username...'/>
                    <input type="password" onChange={(e)=>setPassword(e.target.value) } placeholder='Passowrd...'/>
                    <input type="text" onChange={(e)=>setPhone(e.target.value)}  placeholder='Phone...'/>
                </div>

                <div className='reg-btns'>
                <button className='reg' onClick={RegisterMem} >REGISTER</button>
              <a href='/'> <button className='cancle'>CANCLE</button> </a> 
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default Register;