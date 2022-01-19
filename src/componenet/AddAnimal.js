import React, { useState} from 'react';
import Nav from "./Nav"
import Animals from "./Animals"

const AddAnimal = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const [addSt, setAddSt] = useState(false);

    const saveData =()=>{
        let newUser= {title,price,description,category,image}
        fetch('http://127.0.0.1:8000/api/product',{
          method:"POST",
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(newUser)
        }).then((resp)=>resp.json())
        .then((data)=>{
            if(data.message == "has been save"){
               setAddSt(true)
               console.log("your loged ing");
            }else{
              alert(' Incorrect Username or Password')
            }
        })
         
      }
      if(addSt){
          return <Animals/>
      }

    return (
        <div>
            <Nav/>
            <div className='reg-container'>
            <div className='register addaniaml'>
                <h2>REGISTRATION</h2>
                <div className='inputs'>
                    <input type="text" onChange={(e)=>setTitle(e.target.value)}  placeholder='Title...' />
                    <input type="number" onChange={(e)=>setPrice(e.target.value)}  placeholder='Price...' />
                    <input type="text" onChange={(e)=>setDescription(e.target.value)}  placeholder='Description...'/>
                    <input type="text" onChange={(e)=>setCategory(e.target.value) } placeholder='Category...'/>
                    <input type="text" onChange={(e)=>setImage(e.target.value)}  placeholder='Image...'/>
                </div>

                <div className='reg-btns'>
                <button className='reg' onClick={saveData} >REGISTER</button>
              <a href='/add'> <button className='cancle'>CANCLE</button> </a> 
                </div>
            </div>
            </div>
        </div>
    );
};

export default AddAnimal;