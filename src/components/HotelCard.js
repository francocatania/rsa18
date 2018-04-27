import React from 'react';
import call from 'react-native-phone-call';
import { 
  Dimensions, 
  StyleSheet, 
  View, 
  Text, 
  Image, 
  ScrollView, 
  Linking, 
  Button, 
  Platform, 
  TouchableOpacity 
} from 'react-native';
import Card from './Card';

const { width } = Dimensions.get('window');

const Hotel = (props) => {
  const {
    images,
    name,
    russianName,
    phone,
    mail,
    website
  } = props;

  const { 
    cardContainer,
    hotelImage,
    hotelInfoContainer,
    hotelTitle,
    hotelSubtitle,
    carousel,
    iconsContainer,
    icon,
    iconText,
    buttonContainer
  } = styles;

  const hotelPhoneNumber = {
    number: phone,
    prompt: false
  };
  
  const phoneCall = () => {
    call(hotelPhoneNumber).catch(console.error);
  };

  const sendEmail = () => {
    Linking.openURL(`mailto:${mail}?cc=soporte@consolid.com`);
  };
  
  const openWebsite = () => {
    Linking.openURL(website).catch(err => console.error('An error occurred', err));
  };

  const openInGoogleMaps = () => {
    Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${name}`);
  };

  const buttonColor = Platform.OS === 'ios' ? '#FFFFFF' : '#FF5252';
  const mailIcon = { uri: 'https://www.greycon.com/wp-content/uploads/2015/09/icon-mail-light.png' };
  const websiteIcon = { uri: 'http://pluspng.com/img-png/website-png--600.png' };
  const callIcon = { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnQDrmixVg0fhaeSpqQ7vPakcc6u77kK6msdPUwvDYTEmENMm6' };

  return (
    <Card style={cardContainer}>
      <ScrollView 
        horizontal
        style={carousel}
        pagingEnabled
        showsHorizontalScrollIndicator/*={false}*/
      >
        {images.map((img, idx) => <Image source={{ uri: img }} style={hotelImage} key={idx} />)}
      </ScrollView>
      <View style={hotelInfoContainer}>
        <Text style={hotelTitle}>{name}</Text>
        <Text style={hotelSubtitle}>{russianName}</Text>
        <View style={iconsContainer}>
          <TouchableOpacity onPress={sendEmail}>
            <View style={{ width: 50, alignItems: 'center' }}>
              <Image
                style={[styles.icon, { width: 40 }]}
                source={mailIcon}
              />
              <Text style={iconText}>Mail</Text>
            </View>
          </TouchableOpacity>
          <View style={{ width: 1, height: '100%', backgroundColor: 'lightgray' }} />
          <TouchableOpacity onPress={openWebsite}>
            <View style={{ width: 60, alignItems: 'center' }}>
              <Image
                style={styles.icon}
                source={websiteIcon}
              />
              <Text style={{ color: 'gray', fontSize: 12, marginTop: 5 }}>Sitio Web</Text>
            </View>
          </TouchableOpacity>
          <View style={{ width: 1, height: '100%', backgroundColor: 'lightgray' }} />
          <TouchableOpacity onPress={phoneCall}>
            <View style={{ width: 50, alignItems: 'center' }}>
              <Image
                style={icon}
                source={callIcon}
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
  iconsContainer: { 
    flexDirection: 'row',
    justifyContent: 'space-around', 
    alignItems: 'center', 
    marginTop: 20, 
    height: 60 
  },
  icon: {
    width: 30,
    height: 30
  },
  iconText: { 
    color: 'gray',
    fontSize: 12,
    marginTop: 5
  },
  buttonContainer: {
    marginTop: 20,
    backgroundColor: Platform.OS === 'ios' ? '#FF5252' : 'transparent'
  },
});

export default Hotel;
