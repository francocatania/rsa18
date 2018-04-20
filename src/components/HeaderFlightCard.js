import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const planeIcon = require('../assets/white-plane.png');

const HeaderFlightCard = ({ origin, destination, airline, flightNumber }) => {
  const { 
    cardContainer,
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
    <View style={cardContainer}>
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
  cardContainer: {
    backgroundColor: '#000000',
    height: 100,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,
    marginBottom: 15
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    borderRadius: 4
  },
  contentContainer: {
    backgroundColor: '#00000088',
    position: 'absolute',
    height: '100%',
    width: '100%',
    borderRadius: 4
  },
  origDestContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 3
  },
  lowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1
  },
  origDestText: {
    color: 'white',
    fontSize: 32
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

export default HeaderFlightCard;
