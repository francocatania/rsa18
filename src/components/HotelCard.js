import React from 'react';
import call from 'react-native-phone-call';
import { Dimensions, StyleSheet, View, Text, Image, ScrollView, Linking, Button, Platform, TouchableOpacity, Alert } from 'react-native';
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
    cardContainer,
    hotelImage,
    hotelInfoContainer,
    hotelTitle,
    hotelSubtitle,
    carousel,
    buttonContainer
  } = styles;
  
  const hotelName = 'Azimut Olympic Moscow';
  const hotelPhoneNumber = {
    number: '1530981809',
    prompt: false
  };

  const phoneCall = () => {
    call(hotelPhoneNumber).catch(console.error);
  };

  const sendEmail = () => {
    Linking.openURL('mailto:foo@example.com?cc=bar@example.com&body=Escriba%20su%20mensaje%20aquí');
  };
  
  const openWebsite = () => {
    Linking.openURL('https://en.azimuthotels.com/Russia/azimut-hotel-olympic-moscow/contacts/').catch(err => console.error('An error occurred', err));
  };

  const openInGoogleMaps = () => {
    Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${hotelName}`);
  };

  const buttonColor = Platform.OS === 'ios' ? '#FFFFFF' : '#FF5252';

  return (
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
      <View style={hotelInfoContainer}>
        <Text style={hotelTitle}>{hotelName}</Text>
        <Text style={hotelSubtitle}>Azefhsldkjf Mascaw</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 20, height: 60 }}>
          <TouchableOpacity onPress={sendEmail}>
            <View style={{ width: 50, alignItems: 'center' }}>
              <Image
                style={[styles.button, { width: 40 }]}
                source={{ uri: 'https://www.greycon.com/wp-content/uploads/2015/09/icon-mail-light.png' }}
              />
              <Text style={{ color: 'gray', fontSize: 12, marginTop: 5 }}>Mail</Text>
            </View>
          </TouchableOpacity>
          <View style={{ width: 1, height: '100%', backgroundColor: 'lightgray' }} />
          <TouchableOpacity onPress={openWebsite}>
            <View style={{ width: 60, alignItems: 'center' }}>
              <Image
                style={styles.button}
                source={{ uri: 'http://pluspng.com/img-png/website-png--600.png' }}
              />
              <Text style={{ color: 'gray', fontSize: 12, marginTop: 5 }}>Sitio Web</Text>
            </View>
          </TouchableOpacity>
          <View style={{ width: 1, height: '100%', backgroundColor: 'lightgray' }} />
          <TouchableOpacity onPress={phoneCall}>
            <View style={{ width: 50, alignItems: 'center' }}>
              <Image
                style={styles.button}
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnQDrmixVg0fhaeSpqQ7vPakcc6u77kK6msdPUwvDYTEmENMm6' }}
              />
              <Text style={{ color: 'gray', fontSize: 12, marginTop: 5 }}>Llamar</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={buttonContainer}>
          <Button
            onPress={openInGoogleMaps}
            title="Abrir en Google Maps"
            color={buttonColor}
          />
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    alignSelf: 'center',
    // marginTop: 10,
    marginBottom: 20
  },
  carousel: {
    height: 300,
    width: '100%',
  },
  hotelImage: {
    width: width - 20,
    resizeMode: 'cover'
  },
  hotelInfoContainer: {
    padding: 10
  },
  hotelTitle: {
    fontSize: 26,
    color: 'black'
  },
  hotelSubtitle: {
    fontSize: 18,
    color: 'grey'
  },
  buttonContainer: {
    marginTop: 20,
    backgroundColor: Platform.OS === 'ios' ? '#FF5252' : 'transparent',
  },
  button: {
    width: 30,
    height: 30
  }
});

export default Hotel;
