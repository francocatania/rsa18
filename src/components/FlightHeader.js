import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const planeIcon = require('../assets/plane_white.png');

const FlightHeader = ({ origin, destination, airline, flightNumber }) => {
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

  const parisImgURL = 'https://static.vix.com/es/sites/default/files/styles/large/public/btg/curiosidades.batanga.com/files/Curiosidades-sobre-la-Torre-Eiffel.jpg?itok=zU9Q27Sh';
  
  return (
    <View style={container}>
      <Image source={{ uri: parisImgURL }} style={backgroundImage} />
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
    height: 100
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
    fontWeight: '200'
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
