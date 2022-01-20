import React from "react";
import classes from './Description.module.css'

const Description = props => {
    return (
        <div
            className={classes.Description}
        >
            <p>{props.feelsLike}</p>
            <p>{props.wind}</p>
            <h2>{props.city}</h2>
        </div>
    )
};

export default Description;