import classes from './NameCity.module.css';
import Button from '../../UI/Button/Button';

const NameCity = props => {
    return (
        <form
            className={classes.NameCity}
            onSubmit={props.weatherMethod}
        >
            <input 
                name='city'
                type='text'
                placeholder='Enter your city'
                className={classes.ChangeName}
            />
            <Button 
                onClick={props.onClick}
            />
        </form>
    )
}

export default NameCity