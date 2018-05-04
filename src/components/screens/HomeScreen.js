import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, ActivityIndicator, AsyncStorage } from 'react-native';
import firebase from 'firebase';
import NewsList from '../NewsList';
import MatchCard from '../MatchCard';

class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      match: null,
      news: null,
      logos: null
    };
  }

  componentDidMount() {
    firebase.database().ref('home')
      .once('value', snapshot => {
        this.setState({ match: snapshot.val().match, news: snapshot.val().news });
      });
    AsyncStorage.getItem('loginCode')
    .then(response => {
      firebase.database().ref(`${response}/logos`)
        .once('value', snapshot => {
          this.setState({ logos: snapshot.val() });
        });
    });
  }

  renderSpinner() {
    return (
      <View style={styles.spinnerContainer}>
        <ActivityIndicator size="large" style={{ alignSelf: 'center' }} />
      </View>
    );
  }

  renderHome() {
    const patagonikLogoURL = 'https://firebasestorage.googleapis.com/v0/b/autho-c54b4.appspot.com/o/patagonik_logo.png?alt=media&token=70c96e9f-2835-49a2-9c62-c3443f502e70';
    const masterLogoURL = 'http://adsynergy.co.uk/wp-content/uploads/2017/06/mastercard-logo1.png';
    return (
      <ScrollView>
        <View style={styles.pageContainer}>
          <View style={styles.logosContainer}>
            {this.state.logos.map(logo => (
              <Image source={{ uri: logo }} style={styles.logoImage} />)
            )}
          </View>
          <Text style={styles.title}>Próximo partido</Text>
          <MatchCard {...this.state.match} />
          <Text style={styles.title}>Noticias</Text>
          <NewsList news={this.state.news} />
        </View>
      </ScrollView>
    );
  }

  render() {
    return this.state.match && this.state.news && this.state.logos ? 
      this.renderHome() : 
      this.renderSpinner(); 
  }
}

const styles = StyleSheet.create({
  spinnerContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  pageContainer: {
    flex: 1,
    padding: 10
  },
  logosContainer: {
    flexDirection: 'row',
    height: 32,
    marginBottom: 6,
    alignItems: 'center'
  },
  logoImage: {
    height: '100%',
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    resizeMode: 'contain'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3F51B5',
    marginTop: 6
  }
});

export default HomeScreen;
