import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import cvFile from '../assets/CV Andres Jose Paternina Rubiano En.pdf'
import Swal from 'sweetalert2';

function Contact (){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cvFile; 
    link.download = 'Andres Rubiano CV.pdf'; 
    link.click();
  };
  const handleSubmit = () => {
    if (!name) {
      Swal.fire({
        icon: 'error',
        title: 'Please enter your name',
      });
    } else if (!email) {
      Swal.fire({
        icon: 'error',
        title: 'Please enter your email',
      });
    } else if (!message) {
      Swal.fire({
        icon: 'error',
        title: 'Please enter your message',
      });
    } else {
      setTimeout(() => {
        Swal.fire({
          icon: 'success',
          title: 'Form submitted successfully!',
          text: 'Thank you for your submission.',
        });
      }, 1000); 
    }
  };

    return (
        <section id="contact" className="min-h-auto flex flex-col sm:flex flex-col md:flex-row items-center justify-center mt-20">
            <form className="flex flex-col bg-white rounded-2xl border-2 border-black p-10 mb-10 sm:mb-10 sm:mr-10 ml-0 sm:ml-10 md:ml-0">
        <h1 className="font-bold mb-2 text-7xl text-black">Contact</h1>
        <h1 className="mb-8 text-1xl text-black">Let's connect each other</h1>
        <input
          placeholder='Name'
          className={`mb-5 h-8 border-2 border-black rounded-md ${name ? '' : 'border-red-500'}`}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder='Email'
          className={`mb-5 h-8 border-2 border-black rounded-md ${email ? '' : 'border-red-500'}`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder='Send me a message'
          className={`mb-5 border-2 border-black rounded-md resize-none ${message ? '' : 'border-red-500'}`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white text-1xl font-bold py-2 rounded"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center mb-10">
          <h1 className="text-5xl text-black font-bold -mb-4">CV</h1>
          <h1 className="text-2xl mt-5 font-light text-black">Do you want to checkout my cv?</h1>
          <button className="bg-blue-600 py-2 px-4 text-white text-1xl font-bold py-2  rounded mt-4" onClick={handleDownload}>
          <h1 className="text-1xl text-white font-bold ">Download</h1></button>
          </div>
          <hr className="border-t-4 border-black  w-full" />
          <div className="flex flex-col items-center mt-10" >
            <h1 className="text-5xl text-black font-bold -mb-4">Social media</h1>
            <h1 className="text-2xl mt-5 font-light text-black -mb-4">Click to the link</h1>
            <div className="mt-4">
              <a href='https://api.whatsapp.com/send?phone=573502018139&text=¡Hello! ¿How are you Andres?'>   
              <FontAwesomeIcon size='4x' className='m-3' icon={faWhatsapp} /></a>
              <a href='https://www.linkedin.com/in/andr%C3%A9s-jose-paternina-rubiano-557309229/'>   
              <FontAwesomeIcon size='4x' className='m-3' icon={faLinkedin} /></a>
              <a href='https://github.com/ANDRESJP98'>  
              <FontAwesomeIcon size='4x' className='m-3' icon={faGithub} /></a>
      </div>
      </div>
    </div>
          </section>
    )
}
export default Contact