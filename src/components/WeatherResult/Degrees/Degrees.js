import React from "react";
import clasess from './Degrees.module.css';

const Degrees = props => {
    return (
        <React.Fragment>
            <p className={clasess.Degrees}>{props.degree}</p>
        </React.Fragment>
    )
}

export default Degrees;