import React from "react"
import Back from "./Bac"
import "./contact.css"

const Contact = () => {
    // const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d85.24565535!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp" width="300" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"';
    return (
      <>
        <Back title='Contact us' />
        <section className='contacts padding'>
          <div className='container shadow flexSB'>
            <div className='left'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15707.12016170858!2d78.75449823309492!3d10.198509957492654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0064618920f92b%3A0x622af73919398387!2sSaveriyarpuram%2C%20Tamil%20Nadu%20622505!5e0!3m2!1sen!2sin!4v1715912889137!5m2!1sen!2sin" title="Map" width="600" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className='rightrow'>
              <h1 style={{textAlign:"center"}}>Contact us</h1><br></br>
              <p>We're open for any suggestion or just to have a chat</p>
  
              <div className='items'>
                <div className='box'>
                  <h2>ADDRESS:</h2>
                  <p>198 West 21th Street, Suite 721 New York NY 10016</p>
                </div>
                <div className='box'>
                  <h4>EMAIL:</h4>
                  <p> info@yoursite.com</p>
                </div>
                <div className='box'>
                  <h4>PHONE:</h4>
                  <p> + 1235 2355 98</p>
                </div>
              </div>
  
              <form action=''>
                <div className='flexSB'>
                  <input type='text' placeholder='Name' />&nbsp;
                  <input type='email' placeholder='Email' />
                </div>
                <input type='text' placeholder='Subject' />
                <textarea cols='30' rows='10'>
                  Create a message here...
                </textarea>
                <button className='primary-btn'>SEND MESSAGE</button>
              </form>
  
              <h3>Follow us here</h3>
              <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
            </div>
          </div>
        </section>
      </>
    )
  }
  
  export default Contact;
  