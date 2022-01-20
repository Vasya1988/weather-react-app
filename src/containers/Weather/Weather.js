import React from "react";
import classes from '../Weather/Weather.module.css';
import NameCity from "../../components/NameCity/NameCity";
import WeatherResult from "../../components/WeatherResult/WeatherResult";
import Error from "../../components/WeatherResult/Error/Error";

class Weather extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            nameCity: null,
            degree: null,
            degreeFeelsLike: null,
            wind: null,
            icon: null,
            dayTime: null,
            error: null
        };
    };
    // Отправляем запрос на API сайта погоды
    getWeather = async (city) => {
        if (!city) {
            city = 'Москва';
        } else {
            city = city.target.elements.city.value
        }
        city = city || 'Moscow'
        const key = '57ad26d8d8989166f0ae73503542de6d';
        const getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=ru`);
        const data = await getData.json();
        if (data.name) {
            const changeNameCity = await this.setState({
                nameCity: data.name,
                degree: `${Math.trunc(data.main.temp)}°`,
                degreeFeelsLike: `Ощущается как ${Math.trunc(data.main.feels_like)}°`,
                wind: `Ветер ${Math.trunc(data.wind.speed)} м/сек`,
                icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
                dayTime: data.weather[0].icon,
                error: undefined
            })
            document.querySelector("[name='city']").value = ''
            await console.log(data)
            await console.log(city)
            await console.log(this.state)
        } else {
            console.log(city)
            this.setState({
                error: 'Ошибка'
            })
            console.log('Error --> ', this.state.error)
            document.querySelector("[name='city']").value = ''
        }
    }
    componentDidMount() {
        this.getWeather()
    }
    // Вывод ошибки в приложение
    checkError = (error) => {
        if (error === 'Ошибка') {
            console.log('Error from checkError --> ')
            return <Error error={this.state.error} />
        }
    }
    render() {
        return (
            <React.Fragment>
                <h1 className={classes.WeatherTitle}>Weather in</h1>
                <div className={classes.Weather}>
                    <NameCity
                        weatherMethod={(e)=>{
                            e.preventDefault()
                            this.getWeather(e)
                        }}
                    />
                    <WeatherResult 
                        city={this.state.nameCity}
                        degree={this.state.degree}
                        feelsLike={this.state.degreeFeelsLike}
                        wind={this.state.wind}
                        icon={this.state.icon}
                        dayTime={this.state.dayTime}
                        error={this.state.error}
                    />
                </div>
                {
                    this.checkError(this.state.error)
                }
            </React.Fragment>
        )
    }
}
export default Weather