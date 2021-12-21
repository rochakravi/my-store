import React from 'react';
import PropTypes from 'prop-types';
import { FaWhatsapp } from 'react-icons/fa';
import { FcPhone } from "react-icons/fc";

const Footer = props => {
    return (
        <div className='footer'>
            {/* <div>
                1
            </div>
            <div>
                Trust Is our Pride
            </div> */}
            <div className='h-align'>
                <span style={{marginRight: '15px'}}>Contact us</span>                
                <div className='whatsup'>
                <FaWhatsapp style={{ fontSize : '15px', color:'white'}} />
                </div>
                <FcPhone style={{marginLeft: '15px',fontSize : '25px', color:'white'}}/>
                <span>+91 - 9910568242</span>
                
            </div>
        </div>
    );
};

Footer.propTypes = {
    
};

export default Footer;