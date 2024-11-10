import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import emailjs from '@emailjs/browser';
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from '../../ChatBot/config.js'
import MessageParser from '../../ChatBot/MessageParser.jsx';
import ActionProvider from '../../ChatBot/ActionProvider.jsx';
import '../../App.css';
import './slider.css';
import EdCard from '../templates/EdCard';
import ExCard from '../templates/ExCard';
import { FaWhatsapp,FaGithub,FaLinkedin,FaInstagram,FaLaptopCode  } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { IoMdChatboxes } from "react-icons/io";

function Home() {

    const [username,setUserName] = useState();
    const [email,setEmail] = useState();
    const [contact,setContact] = useState();
    const [message,setMessage] = useState();
    const [chatStatus,setChatStatus] = useState(false);
    console.log(chatStatus);
  
    const chatToggle = () => {
      setChatStatus(prevStatus => !prevStatus);
    };

    const contactRef = useRef(null);

    const handleScroll = () => {
        // Scroll to the contact form smoothly
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceID = 'service_hnpgkr5';
        const templateID = 'template_v8ywycs';
        const publicID = 'RJ2y_71_WEdi4l3Wl';

        const templateParams = {
          from_name: username,
          from_email : email,
          to_name : 'Khushal Prajapati',
          from_contact : contact,
          message : message,
        };

        emailjs.send(serviceID,templateID,templateParams,publicID).
        then((response) => {
          console.log('Email send successfully!',response);
          alert('Email sent successfully');
          setUserName('');
          setEmail('');
          setContact('');
          setMessage('');
        })
        .catch((error) => {
          console.error('Error sending Mail : ',error);
        });

    };

  return (
    <>
    {/* ------------------------first class-------------------------- */}
    <div className='fixed right-4 md:right-24 bottom-4 md:bottom-10 shadow-xl z-40'>
      <button
        className='bg-slate-300 hover:bg-black hover:text-slate-300 p-3 text-2xl rounded-full fixed bottom-6 right-6 md:bottom-10 md:right-10'
        onClick={() => chatToggle()}
      >
        <IoMdChatboxes />
      </button>
      {chatStatus === false ? null : (
        <div className="fixed bottom-20 right-4 md:bottom-16 md:right-12 w-full max-w-xs">
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}
    </div>


    <div className='main-container flex flex-col md:flex-row items-center justify-center py-10'>
      
      {/* Left Profile Section */}
      <div className='left-profile-section w-full md:w-6/12 flex items-center justify-center mb-8 md:mb-0'>
        <div className='img-container flex items-center justify-center border-2 border-black rounded-full p-3 w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80'>
          <img src="Images/rdj1.png" className='bg-gray-100 shadow-2xl rounded-full' width={"90%"} />
        </div>
      </div>

      {/* Right Profile Section */}
      <div className='right-profile-section w-full md:w-6/12 flex items-center px-4 md:px-10'>
        <div className='content-container flex flex-col gap-5 text-center md:text-left'>
          <h1 className='text-2xl md:text-3xl'>Hello, I am Khushal Prajapati</h1>
          
          <p className='flex justify-center md:justify-start items-center text-lg md:text-xl gap-1'>
            I am 
            <Typewriter
              options={{
                strings: ['Web Designer', 'Programmer'],
                autoStart: true,
                loop: true,
              }}
            />
          </p>

          <p className='text-sm md:text-base px-4 md:px-0'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi aliquam quo totam, delectus placeat iusto. Molestiae incidunt voluptate accusamus assumenda quia totam doloremque cupiditate dolore, labore ad, autem ratione repudiandae odit sunt aut quaerat perspiciatis tempora consequatur necessitatibus eligendi nihil.
          </p>

          <div className='flex flex-col md:flex-row gap-4 justify-center md:justify-start'>
          <NavLink to={'#contact'}>
                <button
                    className='border-2 border-black bg-black text-white hover:bg-transparent hover:text-black py-2 px-6 rounded-md w-full'
                    onClick={handleScroll}
                >
                    Hire Me
                </button>
            </NavLink>
            <button className='border-2 border-black hover:bg-black hover:text-white py-2 rounded-md w-full md:w-3/12'>
              Download CV
            </button>
          </div>

          <div className='btn-container flex justify-center md:justify-start gap-3'>
            <button className='flex items-center gap-2 text-2xl border-2 border-gray-700 p-2 rounded-md'>
              <FaWhatsapp />
            </button>
            <button className='flex items-center gap-2 text-2xl border-2 border-gray-700 p-2 rounded-md'>
              <FaGithub />
            </button>
            <button className='flex items-center gap-2 text-2xl border-2 border-gray-700 p-2 rounded-md'>
              <FaLinkedin />
            </button>
            <button className='flex items-center gap-2 text-2xl border-2 border-gray-700 p-2 rounded-md'>
              <FaInstagram />
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* ------------------------second class------------------------- */}
    <div className='second-class-container flex flex-col md:flex-row items-center justify-center py-10 bg-gray-50'>
      <div className='contact-container-about w-full md:w-6/12 px-4 md:px-16 flex flex-col items-center md:items-start text-center md:text-left gap-4'>
        <h2 className='text-3xl md:text-4xl'>About Me</h2>
        <p className='text-sm md:text-base'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio neque ut dicta vero quod, illo iusto voluptatum mollitia magni eligendi, ipsum odit, sapiente voluptate facere! Minus dignissimos quos consequatur officia voluptates cupiditate dolore praesentium rem, magnam corrupti accusamus sapiente aut accusantium ratione doloremque voluptatibus culpa? Quos consequatur iste iusto illum.
        </p>
        <NavLink to={'/about'}>
          <button className='border-2 border-gray-700 py-2 px-4 rounded-md text-sm md:text-base'>
            View More
          </button>
        </NavLink>
      </div>
      <div className='img-container-second-class w-full md:w-6/12 flex items-center justify-center mt-8 md:mt-0'>
        <img src="Images/rdj1.png" className='p-2 border-2 border-black w-2/3 md:w-4/5 lg:w-2/3' />
      </div>
    </div>

    {/* ------------------------educational class-------------------- */}
    
    <div className='educational-class-container flex flex-col items-center md:flex-row md:justify-evenly p-10 md:p-20'> 
      <h1 className='text-3xl md:text-4xl mb-8 md:mb-0 text-center'>My Journey</h1>
      
      <div className='left-card-container flex flex-col gap-10 border-l-2 border-black pl-7 w-full md:w-5/12'>
        <EdCard title={"Secondary School"} subTitle={"Holy Child School"} time={"2019-2020"} />
        <EdCard title={"Higher Secondary School"} subTitle={"Vakharia PJ High School"} time={"2020-2021"} />
        <EdCard title={"Bachelor's Degree"} subTitle={"Ganpat University"} time={"2024 Present"} />
      </div>

      <div className='right-card-container flex flex-col gap-10 border-l-2 border-black pl-7 w-full md:w-5/12 mt-10 md:mt-0'>
        <ExCard icon={<FaCode />} title={"Web-Designing"} description={"College Site, Tour-travel Site, E-commerce Site"} />
        <ExCard icon={<FaLaptopCode />} title={"Programming"} description={"YouTube"} />
      </div>
    </div>

    {/* ------------------------third class-------------------------- */}
    <div className='third-class-container border-t-2 border-b-2 flex flex-col gap-14 items-center justify-center w-full p-10 md:p-20'>
      <div className='skills-img-container w-full px-4 md:px-14 flex flex-wrap items-center justify-center gap-6 md:gap-10'>
        <img src="Images/React-icon.svg.png" className='skill-images w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/8' />
        <img src="Images/Node.js_logo.svg.png" className='skill-images w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/8' />
        <img src="Images/asp1.png" className='skill-images w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/8' />
        <img src="Images/php.png" className='skill-images w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/8' />
        <img src="Images/bootstrap-5-logo-icon.png" className='skill-images w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/8' />
      </div>
      <div className='skills-img-container w-full px-4 md:px-14 flex flex-wrap items-center justify-center gap-6 md:gap-10'>
        <img src="Images/js.png" className='skill-images w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/8' />
        <img src="Images/css.png" className='skill-images w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/8' />
        <img src="Images/html.png" className='skill-images w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/8' />
        <img src="Images/sql.png" className='skill-images w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/8' />
      </div>
    </div>

    {/* -----------------------slider class-------------------------- */}
    <div className='slider-container flex flex-col p-10'>
    <h1 className='text-3xl md:text-4xl lg:text-5xl px-6 md:px-10 lg:px-40 pb-6 md:pb-10'>My Projects</h1>
        <swiper-container class="mySwiper" pagination="true" pagination-clickable="true" navigation="true" space-between="30"
        centered-slides="true" autoplay-delay="3000" autoplay-disable-on-interaction="false">
            <swiper-slide>
                <img src="Images/p1.png" className='w-9/12'/>
            </swiper-slide>
            <swiper-slide>
                <img src="Images/p4.png" className='w-9/12'/>
            </swiper-slide>
            <swiper-slide>
                <img src="Images/p5.png" className='w-9/12'/>
            </swiper-slide>
            <swiper-slide>
                <img src="Images/p6.png" className='w-9/12'/>
            </swiper-slide>
        </swiper-container>
    </div>

    {/* -------------------------contact me------------------------- */}
    <div id='contact' ref={contactRef} className='contact-form-body flex items-center justify-center w-full bg-gray-50 py-14'>
        <div className='contact-form-container flex flex-col items-center justify-center w-full'>
            <h1 className='text-center text-4xl pb-10'>Contact Me</h1>
            <form autoComplete='off' onSubmit={handleSubmit} className='flex flex-col gap-4 w-6/12'>
                <input 
                    type="text" 
                    className='border border-b-2 p-2 outline-none w-full' 
                    placeholder='Name' 
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                />
                <input 
                    type="email" 
                    className='border border-b-2 p-2 outline-none' 
                    placeholder='Email' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input 
                    type="tel" 
                    className='border border-b-2 p-2 outline-none' 
                    placeholder='Contact No' 
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    required
                />
                <textarea 
                    rows={"5"} 
                    className='resize-none border border-b-2 p-2 outline-none' 
                    placeholder='Type Here Your Message' 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
                <button className='border-2 p-2 border-black rounded-md'>Submit</button>
            </form>
            </div>
        </div>
    </>
  )
}

export default Home
