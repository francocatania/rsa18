import React from 'react';
import { StyleSheet, View, Text, Image, Platform } from 'react-native';
import { verticalScale } from 'react-native-size-matters';

const planeIcon = require('../assets/plane_white.png');

const FlightHeader = ({ origin, destination, airline, flightNumber, backdropURL }) => {
  const { 
    container,
    backgroundImage,
    contentContainer,
    origDestContainer,
    lowContainer,
    origDestText,
    airlineText,
    flightNumberText
  } = styles;
  
  return (
    <View style={container}>
      <Image source={{ uri: backdropURL }} style={backgroundImage} />
      <View style={contentContainer}>
        <View style={origDestContainer}>
          <Text style={origDestText}>{origin}</Text>
          <Image source={planeIcon} style={{ height: 26, width: 26 }} />
          <Text style={origDestText}>{destination}</Text>
        </View>
        <View style={lowContainer}>
          <Text style={airlineText}>{airline}</Text>
          <Text style={flightNumberText}>{flightNumber}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: verticalScale(100)
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    position: 'absolute'
  },
  contentContainer: {
    backgroundColor: '#00000088',
    position: 'absolute',
    height: '100%',
    width: '100%'
  },
  origDestContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 3,
    marginLeft: 10,
    marginRight: 10
  },
  lowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1
  },
  origDestText: {
    color: 'white',
    fontSize: 32,
    fontWeight: '200',
    fontFamily: Platform.OS === 'android' ? 'sans-serif-light' : undefined
  },
  airlineText: {
    color: 'white',
    marginRight: 4
  },
  flightNumberText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 4
  }
});

export default FlightHeader;
