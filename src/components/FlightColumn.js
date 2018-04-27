import React from 'react';
import { View, Text, Image, StyleSheet, Platform } from 'react-native';
import { scale } from 'react-native-size-matters';

const takeoffIcon = require('../assets/takeoff_black.png');
const landIcon = require('../assets/land_black.png');

const FlightColumn = ({ isLanding, time, date, airport }) => {
  const icon = isLanding
    ? landIcon
    : takeoffIcon;

  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={icon} />
      <Text style={styles.dateLabel}>{date}</Text>
      <Text style={styles.timeLabel}>{time}</Text>
      <Text style={styles.airportLabel}>{airport}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '35%'
  },
  icon: {
    height: 32,
    width: 32,
    margin: 10
  },
  dateLabel: {
    fontSize: scale(12)
  },
  timeLabel: {
    fontSize: scale(42),
    fontWeight: '200',
    fontFamily: Platform.OS === 'android' ? 'sans-serif-light' : undefined,
    margin: 3
  },
  airportLabel: {
    fontSize: scale(10),
    textAlign: 'center'
  }
});

export default FlightColumn;
