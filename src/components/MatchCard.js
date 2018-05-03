import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import Card from './Card';

const cardBackground = require('../assets/worldCupBlueBackground.jpg');

const MatchCard = ({ instance, home, homeBadge, away, awayBadge, date, time, stadium }) => {
  const { 
    card,
    backgroundImage,
    contentContainer,
    matchDescription,
    badgeAndTimeContainer,
    badgeContainer,
    badge,
    matchTimeContainer,
    matchDate,
    matchTime,
    matchStadium
  } = styles;
  
  return (
    <Card style={card}>
      <Image source={cardBackground} style={backgroundImage} />
      <View style={contentContainer}>
        <Text style={matchDescription}>{instance}</Text>
        <View style={badgeAndTimeContainer}>
          <View style={badgeContainer}>
            <Image source={{ uri: homeBadge }} style={badge} />
            <Text style={matchDescription}>{home}</Text>
          </View>
          <View style={matchTimeContainer}>
            <Text style={matchDate}>{date}</Text>
            <Text style={matchTime}>{time}</Text>
          </View>
          <View style={badgeContainer}>
            <Image source={{ uri: awayBadge }} style={badge} />
            <Text style={matchDescription}>{away}</Text>
          </View>
        </View>
        <Text style={matchStadium}>{stadium}</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    marginBottom: 20
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
    alignItems: 'flex-start',
    marginTop: 20
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
  matchDate: {
    color: '#FFFFFF',
  },
  matchTime: {
    color: '#FFFFFF',
    fontSize: scale(25)
  },
  matchStadium: {
    marginTop: 20,
    alignSelf: 'center',
    color: '#FFFFFF'
  }
});

export default MatchCard;
