import React from 'react';
import logo from '../../../assets/logo.academy.png'
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-sky-400 text-white">
        <div>
          <img className='w-[150px] h-[70px]  text-black rounded' src={logo} alt="" />
          <p>Soprt Limited GT<br/>12 3 Main Uttra</p>
          <p>Dhaka , Bangladesh</p>
        </div> 
        <div>
          <span className="footer-title text-black ">Type of Class</span> 
          <a className="link link-hover  text-black">Sport Academy</a> 
          <a className="link link-hover  text-black">Football</a> 
          <a className="link link-hover  text-black">Cricket</a> 
          <a className="link link-hover  text-black">tennis</a>
          <a className="link link-hover  text-black">volley</a>
          <a className="link link-hover  text-black">Swimming</a>
        </div> 
        <div>
          <span className="footer-title  text-black">Contact info</span> 
          <a className="link link-hover  text-black">About us</a> 
          <a className="link link-hover  text-black">Contact</a> 
          <a className="link link-hover  text-black">email :sakibur11@gmail.com</a> 
          <a className="link link-hover  text-black">Hotline-0972545646</a>
        </div> 
        <div>
          <span className="footer-title  text-black">Copy Right & legal</span> 
          <a className="link link-hover  text-black">Terms of use</a> 
          <a className="link link-hover  text-black">Privacy policy</a> 
          <a className="link link-hover  text-black">Cookie policy</a>
          <p className=' text-black'>&copy; 2023 my product. All rights reserved.</p>
      
        </div>
       
      </footer>
      
        </div>
    );
};

export default Footer;