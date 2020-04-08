import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

const LoaderIndicator = ({ style }) => {
    return (
        <Loader
            type="Audio"
            color="#06F6E1"
            height={50}
            width={50}
            style={style}
        />
    )
}

export default LoaderIndicator