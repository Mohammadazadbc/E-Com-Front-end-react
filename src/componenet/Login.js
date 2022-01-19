import React, {useState } from 'react';
import Animals from "./Animals"
import Nav from './Nav';


const Login = () => {

    const [uname, setuName] = useState("");
    const [upass, setuPass] = useState("");
    const [logStatut, setLogStat] = useState(false)

    const handleLogin =  ()=>{
        const emailPass = {
            username:uname,
            password:upass
        }
        fetch('http://127.0.0.1:8000/api/login',{
            method:"POST",
            body:JSON.stringify(emailPass),
            headers :{
                "Content-Type": "application/json"
            },
           
        }).then((resp)=>resp.json())
        .then((data)=>{
            if(data.message == "welcome"){
               setLogStat(true)
               console.log("your loged ing");
            }else{
              alert(' Incorrect Username or Password')
            }
        })

  }
  if(logStatut){
      return <Animals/>
  }

    return (
       
        <div>
             <Nav/>
             <div className='log-container'>
                <div className='log'>
                    <h2>Sing in to your account</h2>

                    <div className='log-inputs'>
                        <div className='log-input'>
                        <label>Username</label>
                        <input type="text" onChange={(e)=>setuName(e.target.value)} placeholder='Enter your username...'/>
                        </div>
                        <div className='log-input'>
                        <label>Password</label>
                        <input type="password"  onChange={(e)=>setuPass(e.target.value)} placeholder='Enter your password...'/>
                        </div>
                        <button onClick={handleLogin} >Sign in</button>
                    </div>
                   
                    </div>
                    <div className='add-user'>
                        <p>New user? <a href='/register'>Create an account</a> </p>
                    </div>

                </div>
        </div>
    );
};

export default Login;