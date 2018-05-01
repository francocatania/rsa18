import React, { Component } from 'react';
import { View, Text, StyleSheet, AsyncStorage, ScrollView } from 'react-native';
import firebase from 'firebase';
import AgendaDay from '../AgendaDay.js';

class AgendaScreen extends Component {
  constructor() {
    super();
    this.state = {
      agenda: null,
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('loginCode')
      .then(response => {
        firebase.database().ref(`${response}/agenda`)
          .once('value', snapshot => {
            this.setState({ agenda: snapshot.val() });
          });
      });
  }

  render() {
    return (
      <ScrollView>
        {
          this.state.agenda &&
          this.state.agenda.map((day, index) => {
            return (
              <View style={styles.pageContainer}>
                <Text style={styles.timeLabel}>{day.weekday} {day.day} de {day.month}</Text>
                <AgendaDay schedule={day.items} key={index} />
              </View>
            );
          })
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    padding: 10,
  },
  timeLabel: {
    fontSize: 16,
    color: '#3F51B5',
    marginBottom: 10
  }
});

export default AgendaScreen;
