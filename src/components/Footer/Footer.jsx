import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './Footer.css';

class Footer extends React.Component {

  state={

    curTime : new Date().getFullYear(),

  }

  render(){
    return (

      <footer className="text-center text-white fixed-bottom">

          {/* <!-- Grid container --> */}
          <div className="container p-4">
          <SocialIcon url="https://www.linkedin.com/in/maher-amri-302228187/" label="Maher LinkedIn" target="_blank" bgColor="#A8B8C0" className="socialicon" />
          <SocialIcon url="https://github.com/amri-coder"  label="Maher GitHub" target="_blank" bgColor="#A8B8C0" />
          </div>
          {/* <!-- Grid container --> */}


          {/* <!-- Copyright --> */}
          <div className="text-center p-3">
          
            © {this.state.curTime} Copyright made with love 💻 by
            <a href="http://amri.store" target="_blank" rel="noreferrer"> - Maher -</a>
          </div>
          {/* <!-- Copyright --> */}
          
      </footer>
    );
}}

export default Footer
