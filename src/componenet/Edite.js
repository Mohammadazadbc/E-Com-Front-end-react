import React, { useState} from 'react';

const Edite = ({aniamlId}) => {
    const [tt, setTt] = useState("");
    const [pr, setPr] = useState("");
    const [desc, setDesc] = useState("");
    const [cat, setCat] = useState("");
    const [imge, setImge] = useState("");
    const [userId, setUserid] = useState(null);

    const updateDate = async()=>{
        const newData={tt,pr,desc,cat,imge}
       fetch(`http://127.0.0.1:8000/api/product/18`,{
         method:"PATCH",
         headers:{
           'Content-Type':'application/json'
         },
         body:JSON.stringify(newData)
         
       }).then(res => res.json())
       .then(res => {
           console.log(res);
           return res
       })
       
      }
      console.log(aniamlId);
    return (
        <div>
         <h1> update user</h1>
         <input type="text" value={tt}   onChange={(e)=>setTt(e.target.value)}  placeholder="title" /> <br/>
         <input type="number" value={pr} onChange={(e)=>setPr(e.target.value)}  placeholder="price" /> <br/>
         <input type="text" value={desc}  onChange={(e)=>setDesc(e.target.value)} placeholder="description" /> <br/>
         <input type="text" value={cat} onChange={(e)=>setCat(e.target.value)}   placeholder="catagory" /> <br/>
         <input type="text" value={imge} onChange={(e)=>setImge(e.target.value)}  placeholder="Image" />
         <button type="button" onClick={updateDate}>Update</button>
       </div>
    
    );
};

export default Edite;