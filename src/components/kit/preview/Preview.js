import React from 'react';
import {connect } from 'react-redux'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
import './Preview.css'
import { buyCake, closePreview } from '../../../store/actions';

const Preview = props => {
        const closePreview = () => {

        }
        return ReactDOM.createPortal(<div className='box'>
                <div className='model'>
                        <span className='right-corner' onClick={props.closePreview}>CLOSE</span>
                        Here I go -{props.numOfCakes}!
                        <button onClick={props.buyCake}>buy cake </button>
                </div>
        </div>, document.getElementById('portals'))

};

Preview.propTypes = {

};

const mapStateToProps = state => {
        return {
                numOfCakes: state.numOfCakes
        }
}
const mapDispatchToProps = dispatch => {
        return {
                buyCake: () => dispatch(buyCake()),
                closePreview: () => dispatch(closePreview())
        }
}
export default connect(mapStateToProps, mapDispatchToProps)(Preview);