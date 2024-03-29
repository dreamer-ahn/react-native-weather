import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from "expo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const weatherCases = {
    Rain: {
        colors: ["#00C6FB", "#005BEA"],
        title: "Raining",
        subtitle: "For more info look ouside",
        icon: "weather-rainy"
    },
    Clear: {
        colors: ["#FEF253", "#FF7300"],
        title: "Sunny",
        subtitle: "Go get your as burnt",
        icon: "weather-sunny"
    },
    Thunderstom: {
        colors: ["#00ECBC", "#&007ADF"],
        title: "Thunderstom",
        subtitle: "Actually, outside of the house",
        icon: "weather-lightning"
    },
    Clouds: {
        colors: ["#D7D2CC", "#304352"],
        title: "Clouds",
        subtitle: "I know, boring",
        icon: "weather-cloudy"
    },
    Snow: {
        colors: ["#7DE2FC", "#B9B6E5"],
        title: "Snow",
        subtitle: "Do you want to build a snowmin?",
        icon: "weather-snowy"
    },
    Drizzle: {
        colors: ["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "Is like rain, but gay",
        icon: "weather-hail"
    },
    Haze: {
        colors: ["#89F7FE", "#66A6FF"],
        title: "Haze",
        subtitle: "Don't know what that is",
        icon: "weather-hail"
    },
    Mist: {
        colors: ["#D7d2CC", "#304352"],
        title: "Mist",
        subtitle: "It's like you have no glasses on.",
        icon: "weather-fog"
    }
}

export default class Weather extends Component {
    render() {
        console.log(this.props.weatherName);
        return (
            <LinearGradient colors={weatherCases[ this.props.weatherName ].colors} style={styles.container}>
                <View style={styles.upper}>
                    <MaterialCommunityIcons color="white" size={144} name={weatherCases[ this.props.weatherName ].icon} />
                    <Text style={styles.temp}>{this.props.temp}º</Text>
                </View>    
                <View style={styles.lower}>
                    <Text style={styles.title}>{this.props.name} {weatherCases[ this.props.weatherName ].title}</Text>
                    <Text style={styles.subtitle}>{weatherCases[ this.props.weatherName ].subtitle}</Text>
                </View>    
            </LinearGradient>
        );
    }
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
    },
    temp: {
        fontSize: 48,
        backgroundColor: "transparent",
        color: "white",
        marginTop: 10,
    },




    lower: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25,
    },
    title: {
        fontSize: 38,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 10,
        fontWeight: "300"
    },
    subtitle: {
        fontSize: 24,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 24
    }
});