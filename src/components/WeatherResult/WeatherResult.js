import classes from './WeatherResult.module.css';
import WeatherIcon from './WeatherIcon/WeatherIcon';
import Degrees from './Degrees/Degrees';
import Description from './Description/Description';

const WeatherResult = props => {
    // Провермя время суток для отображения цвета фона
    let cls = classes.WeatherResult;
    if (props.dayTime) {
        let day = Array.from(props.dayTime)
        day.filter((e)=>{
            if (e === 'd') {
                console.log('Day --> ', e);
                cls = `${cls} ${classes.day}`
            } else if (e === 'n') {
                console.log('Night --> ', e)
                cls = `${cls} ${classes.night}`
            }
        })
    }
    // console.log(Object.values(classes));
    return (
        <div className={cls} >
            <Degrees 
                degree={props.degree}
            />
            <WeatherIcon 
                icon={props.icon}
            />
            <Description 
                city={props.city}
                feelsLike={props.feelsLike}
                wind={props.wind}
            />
        </div>
    )
}

export default WeatherResult;