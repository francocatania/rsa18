import React from 'react';
import { Dimensions, StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import Card from './Card';

const hotelUrl = 'https://gbsn.org/wp-content/uploads/2017/03/olympic-hotel.jpg';
const hotelUrl2 = 'https://images.trvl-media.com/hotels/1000000/10000/7800/7736/7736_195_z.jpg';
const hotelUrl3 = 'https://t-ec.bstatic.com/images/hotel/max1024x768/328/32837688.jpg';

const { width } = Dimensions.get('window');
const Hotel = (/*{ 
  hotelName, 
  hotelNameRussian, 
  hotelImgs, 
  address, 
  addressRussian, 
  hotelTelephone, 
  hotelMail, 
  hotelWebsite 
}*/) => {
  const { 
    screen,
    cardContainer,
    hotelImage,
    hotelTitle,
    hotelSubtitle,
    carousel
  } = styles;
  
  return (
    <View style={screen}>
      <Card style={cardContainer}>
        <ScrollView 
          horizontal
          style={carousel}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        >
          <Image source={{ uri: hotelUrl }} style={hotelImage} />
          <Image source={{ uri: hotelUrl2 }} style={hotelImage} />
          <Image source={{ uri: hotelUrl3 }} style={hotelImage} />
        </ScrollView>
        <Text style={hotelTitle}>Azimut Moscow</Text>
        <Text style={hotelSubtitle}>Azefhsldkjf Mascaw</Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F8F8F8'
  },
  cardContainer: {
    width: '95%',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 15
  },
  carousel: {
    height: 300,
    width: '100%',
    backgroundColor: 'red'
  },
  hotelImage: {
    width: width - 20,
    resizeMode: 'cover'
  },
  hotelTitle: {
    fontSize: 30,
    color: 'black'
  },
  hotelSubtitle: {
    fontSize: 18,
    color: 'grey'
  }
});

export default Hotel;
