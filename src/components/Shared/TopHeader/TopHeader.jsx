import React from 'react';
import './index.css';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaGithubSquare, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const TopHeader = () => {
    return (
        <div id="topbar" className="d-flex align-items-center fixed-top">
            <div className="container d-flex justify-content-between">
                <div className="contact-info d-flex align-items-center">
                    <FaEnvelope className='contact-icon' /> <a href="mailto:zshan.code@gmail.com">zshan.code@gmail.com</a>
                    <FaPhoneAlt className='contact-icon' /> <a href="tel:+88 00000 000000">+88 00000 000000</a>
                </div>
                <div className="d-none d-lg-flex social-links align-items-center">
                    <a href="https://github.com/zshan-code" target='_blank' rel="noreferrer" className=""><FaGithubSquare /></a>
                </div>
            </div>
        </div>
    );
};
export default TopHeader;