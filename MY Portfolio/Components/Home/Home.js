import React from 'react';
import './Home.scss';
import img1  from'../../Images/teacher.jpeg';
import Typical from 'react-typical';

const Home = () => {
    return (
       <>
       
           <div className='MainHome'>
           <div className='Name'>
               <h2>Hi,Iam Chetan<br/>Welcome to my portfolio....</h2>
               <Typical  className='typical'
                   steps={['welcome..',1000,'Smart worker..',1000,'Hire me 🙂..',1359,'workholic 😎',1000]}
                   loop={Infinity}
               />
           </div>
          
           <div className='image'>
               <img src={img1} ></img>
               
           </div>

           </div>
       </>
    )
}

export default Home
