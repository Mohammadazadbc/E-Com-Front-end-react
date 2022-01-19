import React,{ useState,useEffect } from 'react';
import Edite from './Edite';
import Nav from './Nav';

const Animals = () => {
  const [aniamlId, setAniamlID] = useState();
    const [animal, setAnimal] = useState([]);
    const getUser = async ()=>{
        fetch('http://127.0.0.1:8000/api/product')
        .then(rep =>rep.json())
        .then((data)=>{
          setAnimal(data)
      
        })  
      }
      useEffect(()=>{
        getUser()
      },[])

      const deleteAniaml=(id)=>{
        fetch(`http://127.0.0.1:8000/api/product/${id}`,{
          method:"DELETE",
        }).then((data)=>{
          console.log(data);
        })
        getUser()
      }

      const getTheId = (id)=>{
        setAniamlID(id)
      return <Edite aniamlId={aniamlId} />
      }

    return (
        <div>
           <Nav/>
            <a href='/login'>Logout</a>
            <div className='aniaml-container'>
                <h3>Basic Types of Animals and Their Characteristics</h3>
                <p>Scientists sort the different types of animals in the world into categories based on certain characteristics. Animals are generally grouped into six types of animals. The system for animal classifications is called taxonomy.</p>
                <a href='add'><button className='addbtn'> <img src="https://img.icons8.com/ios/50/000000/add--v1.png"/> Add New</button> </a>

                <div className='animal-type'>

                {animal.map((val)=>(
                    <ul className='animal-list' >
                      <div>   
                        <li className='aniaml-img' > <img src={val.image} /> </li>
                      </div>
                      <div className='aniaml-desc'> 
                      
                      <div className='edit-delete'>

                        <li> <h3>{val.title} </h3>  </li>
                        <div>
                          <a onClick={()=>getTheId(val.id)} href='/edit' > 
                         <img  src="https://img.icons8.com/fluency/48/000000/edit.png"/>
                          </a>
                        <img onClick={()=> deleteAniaml(val.id)} src="https://img.icons8.com/material-rounded/24/000000/filled-trash.png"/>
                        </div>
                      </div>
                         <li> <p>{val.description} </p>  </li>
                          </div>

                    </ul>
                ))}

                </div>
          
            </div>

        </div>
    );
};

export default Animals;