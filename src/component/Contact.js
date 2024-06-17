import React from 'react'
import {MdEmail,MdPhoneInTalk,MdLocationOn} from "react-icons/md"
import {SiLinkedin,SiInstagram,SiGithub} from "react-icons/si"

const Contact = () => {
  return (
    <div className='contact' id='contact'>
    <h1 className='heading'>Contact Us</h1>
    <div className='contact_content'>
    <form className='contact-from'>
      <input type="text" placeholder='name'/>
      <input type="text" placeholder='email'/>
      <textarea></textarea>
      <button>Send</button>
    </form>
    <div className='socialMedia'>
      <div className='socialMedia_item'>
        <MdEmail/>
        <p>Dynamict@gmail.com</p>
      </div>
      <div className='socialMedia_item'>
        <MdPhoneInTalk/>
        <p>1234567890</p>
      </div>
      <div className='socialMedia_item'>
        <MdLocationOn/>
        <p>Mumbai, Maharastra</p>
      </div>

      <div className='socialMedia_personal'>
        <a href=''><SiLinkedin/></a>
        <a href=''><SiInstagram/></a>
        <a href=''><SiGithub/></a>
      </div>  
    </div>
    </div>
  </div>
  )
}

export default Contact