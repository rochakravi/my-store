import React from 'react';
import PropTypes from 'prop-types';
import  './Header.css';
import { FaUserAlt } from 'react-icons/fa';
import { FiHeart, FiShoppingCart } from "react-icons/fi";


const Header = props => {
    return (
        <div className='header'>
            <h1>My Store</h1>
            {/* <div className='division'>
                <span>Clothes</span>
                <span>Clothes</span>
                <span>Clothes</span>
                <span>Clothes</span>
            </div> */}
            {/* <div className='division'>
                <div className='vertical-align center-align'>
                    <FiHeart style={{fontSize : '20px'}}/>
                    <span>Wishlist</span>
                </div>
                <div className='vertical-align'>
                    <FiShoppingCart style={{fontSize : '20px'}}/>
                    <span>Cart</span>
                </div>
                <div className='vertical-align center-align'>
                    <FaUserAlt style={{fontSize : '20px'}}/>
                    <span style={{width: '100px'}}>Sign Up / Login</span>
                </div>
               
            </div> */}
        </div>
    );
};

Header.propTypes = {

};

export default Header;