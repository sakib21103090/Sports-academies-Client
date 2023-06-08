import React from 'react';
import logo from '../../../assets/logo.academy.png'
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-slate-700 text-white">
        <div>
          <img className='w-[150px] h-[70px] rounded' src={logo} alt="" />
          <p>LIFE AI IT<br/>12 3 Main Uttra</p>
          <p>Dhaka , Bangladesh</p>
        </div> 
        <div>
          <span className="footer-title text-black ">Type of Toys</span> 
          <a className="link link-hover">Farm Animals</a> 
          <a className="link link-hover">Aquatic Animals</a> 
          <a className="link link-hover">Birds</a> 
          <a className="link link-hover">Reptiles</a>
          <a className="link link-hover">Jungle Animals</a>
          <a className="link link-hover">Domestic Pets</a>
        </div> 
        <div>
          <span className="footer-title  text-black">Contact info</span> 
          <a className="link link-hover">About us</a> 
          <a className="link link-hover">Contact</a> 
          <a className="link link-hover">email :sakibur11@gmail.com</a> 
          <a className="link link-hover">Hotline-0972545646</a>
        </div> 
        <div>
          <span className="footer-title  text-black">Copy Right & legal</span> 
          <a className="link link-hover">Terms of use</a> 
          <a className="link link-hover">Privacy policy</a> 
          <a className="link link-hover">Cookie policy</a>
          <p>&copy; 2023 my product. All rights reserved.</p>
      
        </div>
       
      </footer>
      
        </div>
    );
};

export default Footer;