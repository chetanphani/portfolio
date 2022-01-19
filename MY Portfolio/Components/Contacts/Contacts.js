import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Contacts.scss";

const Contacts = () => {
  const [showModal, setShowModal] = useState(true);
  let history=useHistory();
  const closeModal=()=>
  {
      history.push('/')
  }
  return (
    <>
       <div className="Backdrop" style={{cursor:'pointer'}} onClick={closeModal} ></div> 
           {/*{showModal && <div className='Cart_Modal'>
             <h1>hui</h1>
           </div>} */}
      <div className="modal">
      <h3  className="close_modal" onClick={closeModal}>close</h3>
        <div className="links">
        <a href="https://www.linkedin.com/in/chetan-phani-javvadi-732aa1148/">Linked in</a>
        <a href="https://github.com/chetanphani">Git hub</a>
        {/* <a href="#">Facebook</a> */}
        <a >chetanphani4u@gmail.com</a>
        <a >contact-8897711530 😄</a>
         <h2 className="keepsmiling" >Thanks for visiting my profile <br/> Keep smiling 😆 </h2>
        </div>
      </div>
    </>
  );
};

export default Contacts;
