import classes from './WrongNameCity.module.css';

const WrongNameCity = () => {

    // console.dir(classes.WrongNameCity)
    return (
        <div 
            className={classes.WrongNameCity}
        >
            <p>Введите корректное имя города!</p>
        </div>
    )
}

export default WrongNameCity;