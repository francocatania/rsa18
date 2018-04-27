import React, { Component } from 'react';
import { View, Text, StyleSheet, AsyncStorage } from 'react-native';
import Timeline from 'react-native-timeline-listview';
import firebase from 'firebase';
import FlightHeader from '../FlightHeader';
import Card from '../Card';

class AgendaScreen extends Component {
  constructor() {
    super();
    this.data = [
      {
        type: 'text',
        time: '09:00',
        title: 'Arribo al Hotel Azimut',
        description: 'Check-in en el Super Hotel 5 estrellas donde Putin estuvo con Pampita.'
      },
      {
        type: 'flight',
        time: '11:00',
        origin: 'EZE',
        destination: 'CDG',
        airline: 'AirFrance',
        flightNumber: 'AF229'
      },
      {
        type: 'text',
        time: '13:00',
        title: 'Almuerzo con Mirtha Rusa',
        description: 'Los invitados de hoy son Vladimir Putin, Vladimir Gayin, Vladimir Trolin.'
      },
      {
        type: 'text',
        time: '19:00',
        title: 'Cena en la Plaza Roja',
        description: 'Picnic con los rusos que estén paseando por ahí.'
      }
    ];
    this.state = {
      agenda: [],
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('loginCode')
      .then(response => {
        if (response) {
          firebase.database().ref(`${this.state.appCode}/agenda`)
            .once('value', snapshot => {
              this.setState({ agenda: snapshot.val() }, console.log(this.state.agenda));
            });
        } else {
          console.log('churros');
        }
      });
  }

  renderDetail(rowData, sectionId, rowId) {
    // console.log(rowData);
    // console.log(sectionId);
    // console.log(rowId);
    if (rowData.type === 'flight') {
      return <Card><FlightHeader {...rowData} /></Card>;
    }
    return <Text style={{ color: 'white', fontSize: 18, marginBottom: 15 }}>{rowData.title}</Text>;
  }

  render() {
    return (
      <View style={styles.pageContainer}>
        <Timeline
          data={this.data}
          renderDetail={this.renderDetail.bind(this)}
          timeStyle={styles.timeLabel}
          innerCircle={'dot'}
          dotColor="#333333"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: '#333333',
    flex: 1,
    paddingTop: 10,
    paddingRight: 10
  },
  timeLabel: {
    color: 'white'
  }
});

export default AgendaScreen;
