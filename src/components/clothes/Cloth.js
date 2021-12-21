import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './Cloth.css'
import axios from 'axios';
import Preview from '../kit/preview/Preview';
import Product from '../product/Product';
import '../../../src/images/clothes/jeans/j1.jpeg';

const Cloth = props => {
    const [data, setData] = useState([]);
    const [showPreview, setshowPreview] = useState(true)
    const isPreviewFlag = useSelector(state => state.isPreview)
    const url = '../../../src/images/clothes/jeans/j1.jpeg';
    
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(res => {
                setData(res.data);
            })

    }, [])

    return (
        <>
             {isPreviewFlag ? <Preview /> : ''}
            <h4>{props.title}</h4>
            <Product data={data} />
           
        </>

    );
};

Cloth.propTypes = {

};

export default Cloth;