import React, { Component } from 'react';
import axios from 'axios';
import '../App.css'; // App.css 파일을 임포트

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '',  // 위치 이름을 저장할 상태
      temp: 0,
      temp_max: 0,
      temp_min: 0,
      humidity: 0,
      desc: '',
      icon: '',
      loading: true,
      backgroundImage: '',
    };
  }

  componentDidMount() {
    this.setBackgroundImage();
    this.getIPAddressLocation();
  }

  getIPAddressLocation = () => {
    axios
      .get('https://ipapi.co/json/')
      .then((response) => {
        const { latitude, longitude, city } = response.data;
        this.setState({ cityName: city });
        this.fetchWeather(latitude, longitude);
      })
      .catch((error) => {
        console.error("Error getting location:", error);
        alert("Unable to retrieve your location based on IP. Please try again later.");
        this.setState({ loading: false });
      });
  };

  fetchWeather = (latitude, longitude) => {
    this.setState({ loading: true });
    const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios
      .get(url)
      .then((responseData) => {
        const data = responseData.data;
        this.setState({
          temp: data.main.temp,
          temp_max: data.main.temp_max,
          temp_min: data.main.temp_min,
          humidity: data.main.humidity,
          desc: data.weather[0].description,
          icon: data.weather[0].icon,
          loading: false,
        });
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        this.setState({ loading: false });
        alert("Error fetching weather data. Please try again later.");
      });
  };

  setBackgroundImage() {
    const currentHour = new Date().getHours();
    let backgroundImage = '';

    if (currentHour >= 5 && currentHour < 12) {
      backgroundImage = 'morning.jpg';
    } else if (currentHour >= 12 && currentHour < 18) {
      backgroundImage = 'afternoon.jpg';
    } else if (currentHour >= 18 && currentHour < 21) {
      backgroundImage = 'evening.jpg';
    } else {
      backgroundImage = 'night.jpg';
    }

    this.setState({ backgroundImage });
  }

  render() {
    const imgSrc = `https://openweathermap.org/img/w/${this.state.icon}.png`;
    const { backgroundImage } = this.state;
    return (
      <div className="wrapper" style={{ backgroundImage: `url(${backgroundImage})` }}>
        {this.state.loading ? (
          <p>Loading...</p>
        ) : (
          <div className="weather-info">
            {this.state.temp ? (
              <>
                <h2>{this.state.cityName}</h2>
                <h2>{this.state.temp.toFixed(1)}°C</h2>
                <img src={imgSrc} alt="Weather Icon" />
                <p>{this.state.desc}</p>
                <p>
                  최고: {this.state.temp_max.toFixed(1)}°C 최저: {this.state.temp_min.toFixed(1)}°C
                </p>
                <p>습도: {this.state.humidity}%</p>
              </>
            ) : (
              <p>Could not retrieve weather data.</p>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Weather;
