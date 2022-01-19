import React from 'react';

const Nav = () => {
    return (
        <div className='nav-bar' >
            <img className='logo' src="https://pbs.twimg.com/ext_tw_video_thumb/1440027058923401220/pu/img/kOGq8YXjFThtyZNH.jpg"/>
            <a className='home-logo' href='/'><img src="https://img.icons8.com/bubbles/50/000000/home-page.png"/> </a> 
          <div>
            <input type="text" placeholder='Search...' ></input>

            </div>
            <div className='nav-left'>
                <a href='/login'>  <div>
                <img src="https://img.icons8.com/fluency-systems-filled/50/000000/administrator-male.png"/>
                <a href='/login'> Login</a>
                </div>  </a>
              
              <a  href='/register'>
              <div >    
                <img src="https://img.icons8.com/fluency-systems-filled/48/000000/add-administrator.png"/>
             <a href='/register'> Register</a>
                </div>  
              </a>
             
            </div>
          
           
        </div>
    );
};

export default Nav;