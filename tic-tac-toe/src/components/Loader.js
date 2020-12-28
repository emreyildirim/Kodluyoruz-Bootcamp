import React from 'react'
import loaderScreen from '../styles/assets/loader.png'
const Loader = (props) => {
    return (
        <img
        className="loader"
         onClick={props.onClick}
         src={loaderScreen}
        />
    )
}

export default Loader
