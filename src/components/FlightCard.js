import React from 'react';
import { View, Text } from 'react-native';
import HeaderFlightCard from './HeaderFlightCard';

const FlightCard = () => {
  const demoDataForHeader = {
    origin: 'EZE',
    destination: 'CDG',
    airline: 'AirFrance',
    flightNumber: 'AF229'
  };
  
  return (
    <View>
      <HeaderFlightCard {...demoDataForHeader} />
      <Text>This is the flightCard Lord Zucc</Text>
    </View>
  );
};

export default FlightCard;
