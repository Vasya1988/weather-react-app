import classes from './WeatherIcon.module.css';

const WeatherIcon = props => {
    return (
        <div className={classes.WeatherIcon}>
            <img src={props.icon} />
        </div>
    )
}

export default WeatherIcon;