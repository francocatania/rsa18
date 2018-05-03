import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import Card from './Card';

const cardBackground = require('../assets/worldCupBlueBackground.jpg');

const AgendaMatch = ({ home, homeBadge, away, awayBadge, stadium }) => {
  const { 
    card,
    backgroundImage,
    contentContainer,
    matchDescription,
    badgeAndTimeContainer,
    badgeContainer,
    badge,
    matchTimeContainer,
    vs,
    matchStadium
  } = styles;
  
  return (
    <Card style={card}>
      <Image source={cardBackground} style={backgroundImage} />
      <View style={contentContainer}>
        <Text style={matchStadium}>{stadium}</Text>
        <View style={badgeAndTimeContainer}>
          <View style={badgeContainer}>
            <Image source={{ uri: homeBadge }} style={badge} />
            <Text style={matchDescription}>{home}</Text>
          </View>
          <View style={matchTimeContainer}>
            <Text style={vs}>vs</Text>
          </View>
          <View style={badgeContainer}>
            <Image source={{ uri: awayBadge }} style={badge} />
            <Text style={matchDescription}>{away}</Text>
          </View>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 5
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  contentContainer: {
    padding: 10
  },
  matchDescription: {
    color: '#FFFFFF'
  },
  badgeAndTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start'
  },
  badgeContainer: {
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge: {
    height: verticalScale(55),
    width: '100%',
    resizeMode: 'contain',
  },
  matchTimeContainer: {
    height: verticalScale(55),
    alignItems: 'center',
    justifyContent: 'center',
  },
  matchStadium: {
    color: '#FFFFFF',
    alignSelf: 'center',
    // marginBottom: 5
  },
  vs: {
    color: '#FFFFFF',
    fontSize: scale(20)
  },
});

export default AgendaMatch;
