import React from 'react';
import { Text } from 'react-native';
import FlightHeader from './FlightHeader';
import Card from './Card';

const FlightCard = () => {
  const demoDataForHeader = {
    origin: 'EZE',
    destination: 'CDG',
    airline: 'AirFrance',
    flightNumber: 'AF229'
  };
  
  return (
    <Card>
      <FlightHeader {...demoDataForHeader} />
      <Text>This is the flightCard Lord Zucc</Text>
    </Card>
  );
};

export default FlightCard;
