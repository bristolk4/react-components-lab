import './WeatherForecast.css'

const WeatherForecast = ({ day, img, imgAlt, conditions, time }) => {
    return (
      <>
        <h3>Weather for {day}:</h3>
        <img src={img} alt={imgAlt}/>
        <p>Weather conditions: {conditions}</p>
        <p>Time of day: {time}</p>
      </>
    );
  };
  
  export default WeatherForecast;