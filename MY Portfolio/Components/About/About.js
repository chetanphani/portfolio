import React from 'react'
import './About.scss';

const About = () => {
    return (
        <>
            <body className='body'>
            <div className='myself'>
                  <p>Hi ✋ iam chetan phani, i had completed my <span>Master of Engineering  </span> in Mechanical stream from saveetha University Chennai..i hail from Telangana state,later on as my intrests grown through computers, I learned <span>Selenium,Java & Sql</span> and i have 1.4 years of experince as Quality Assurance Engineer at <span>Toppr Byju's</span>..and when i found Devlopment intresting and challenging..i decided to explore web Devlopment and exceled <span>Html,Css,Java Script&React 📖</span>and got an opportunity to work as intern for few months where i worked on Tests Feature and now waiting for a challeing job to kick start my carrer as a devloper 😎</p>
            </div>
            <marquee direction = "right"><h2 style={{backgroundColor:'black',color:'white',width:'250px',marginLeft:'9px',textAlign:'center',fontSize:'30px',borderRadius:'9px',padding:'3px',float:'left-right'}}>My projects</h2></marquee>
            {/* <mareq */}
            <div className='my_projects'>
            
            <div className='app1'>
            <h3>Movie app</h3>
                <p>In this movie app,user can search the movies of his choice and get the details of the movie,In this project i have used Omdb rest ful api for fetching data and redux toolkit and react router for routing</p>
            </div>
            <div className='app2'>
            <h3>Food app</h3>
                <p>In this Food app,user can go through the Food items available,which was hardcoded and user then can add them to the cart,user can edit the cart whenever needed and can checkout.</p>
            </div>
            <div className='app3'>
            <h3>Quote's App</h3>
                <p>This  Add Quote app is little interesting ,by using this app user can add the quotes he desired and those all added quotes will be added to the Quotes section,user can anytime edit/delete the quotes he added previously   and i implemented react router for routing</p>
            </div>
            <div className='app4'>
            <h3>Countdowntimer App</h3>
                <p>This is a simple Countdown calculating app,so by using this user can set the countdown from start day to end day ,this can be used in apps  where  company want to show any countown for offers etc..</p>
            </div>
           
            </div>

            </body>
        </>
    )
}

export default About
