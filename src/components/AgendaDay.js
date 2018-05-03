import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Timeline from 'react-native-timeline-listview';
import FlightHeader from './FlightHeader';
import Card from './Card';
import AgendaMatch from './AgendaMatch';

const AgendaDay = ({ schedule }) => {
  const renderDetail = (rowData) => {
    if (rowData.type === 'flight') {
      return <Card><FlightHeader {...rowData} /></Card>;
    }
    if (rowData.type === 'match') {
      return <AgendaMatch {...rowData} />;
    }
    return (
      <Card style={styles.agendaDay}>
        <Text style={{ color: '#212121', fontSize: 16, marginBottom: 5 }}>{rowData.title}</Text>
        <Text style={{ color: '#757575', fontSize: 14 }}>{rowData.description}</Text>
      </Card>
    );
  };

  return (
      <Timeline
        data={schedule}
        renderDetail={renderDetail}
        circleColor='#FF5252'
        lineColor='#FF5252'
      />
  );
};

const styles = StyleSheet.create({
  agendaDay: {
    padding: 10
  }
});

export default AgendaDay;
