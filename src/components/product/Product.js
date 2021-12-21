import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { buyCake } from '../../store/actions';
import { Data } from './../../data'

const Product = props => {
    console.log('data =>', Data)
    const dispatch = useDispatch()
    const showPreview = () => {
        alert('jay jay jay jay hey !')
    }
    return (
        // <ul style={{ position: 'absolute', display: 'flex', flexFlow: 'wrap' }}>
        <ul style={{  display: 'flex', flexFlow: 'wrap' }}>
           <li className='vertical-align center-align'>
               <img src={require('../../../src/images/clothes/jeans/j1.jpeg')} />
               <span className='m-top-10'>Rs. 750</span>
           </li>
           <li className='vertical-align center-align'>
               <img src={require('../../../src/images/clothes/jeans/j2.jpeg')} />
               <span className='m-top-10'>Rs. 750</span>
           </li>
           <li className='vertical-align center-align'>
               <img src={require('../../../src/images/clothes/cotton_pants/cp1.jpeg')} />
               <span className='m-top-10'>Rs. 500</span>
           </li>
           <li className='vertical-align center-align'>
               <img src={require('../../../src/images/clothes/cotton_pants/cpcp1.jpeg')} />
               <span className='m-top-10'>Rs. 500 per piece</span>
           </li>
           <li className='vertical-align center-align'>
               <img src={require('../../../src/images/clothes/cotton_pants/cpcp2.jpeg')} />
               <span className='m-top-10'>Rs. 500 per piece</span>
           </li>
           <li className='vertical-align center-align'>
               <img src={require('../../../src/images/clothes/cotton_pants/cpcp3.jpeg')} />
               <span className='m-top-10'>Rs. 500 per piece</span>
           </li>
           <li className='vertical-align center-align'>
               <img src={require('../../../src/images/clothes/kids/jacket/j1.jpeg')} />
               <span className='m-top-10'>Rs. 450</span>
               <span className='m-top-10 red'> Out Of Stock</span>              
           </li>
           <li className='vertical-align center-align'>
               <img src={require('../../../src/images/clothes/kids/jacket/j2.jpeg')} />
               <span className='m-top-10'>Rs. 450</span>
               <span className='m-top-10 red'> Out Of Stock</span>
           </li>
           <li className='vertical-align center-align'>
               <img src={require('../../../src/images/clothes/kids/jacket/j3.jpeg')} />
               <span className='m-top-10'>Rs. 450</span>
               <span className='m-top-10 red'> Out Of Stock</span>
           </li>
            {/* <img src={require('../../../src/images/clothes/jeans/j1.jpeg')} /> */}
            {/* {props.data.map(user => <li className='font-xl' key={user.id} onClick={()=> dispatch({type:'BUY_CAKE'}) }> <div className='product'> */}
            {/* {props.data.map(user => <li className='font-xl' key={user.id} onClick={()=> dispatch(buyCake()) }> <div className='product'>
            <span>{user.title}</span>
        </div></li>)} */}
        </ul>
    );
};

Product.propTypes = {

};

export default Product;