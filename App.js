import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Weather from './Weather';

const API_KEY = "7bad1f9d43c7b103b4cc5b60bfc69200";

export default class App extends Component {
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    weatherName: null,
    name: null,
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
        position => {
            // console.log(position);
            this._getWeather(
                position.coords.latitude, 
                position.coords.longitude
            );
        },
        error => {
          // console.log(error);
          this.setState({
            error: error
          });
        }
    );
  }
  _getWeather = (lat, lon) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`;
    // console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      this.setState({
        isLoaded: true,
        temperature: json.main.temp,
        weatherName: json.weather[0].main,
        name: json.name,
      });
    })
    .catch(function(e) {
        // console.log(e);
    });
  }

  render() {
    const { isLoaded, error, temperature, weatherName, name } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"></StatusBar>
        {
          isLoaded ? <Weather weatherName={weatherName} name={name} temp={Math.ceil(temperature - 273.15)}></Weather> : 
          <View style={styles.loading}>
            <Text style={styles.loadingText}>Getting the weather</Text>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
          </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  errorText: {
    color: "red",
    backgroundColor: "transparent",
    marginBottom: 40
  },
  loading: {
    flex:1,
    backgroundColor: "#FDF6AA",
    justifyContent: "flex-end",
    paddingLeft: 25
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 100
  }
});
