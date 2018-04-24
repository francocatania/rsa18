import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import HotelScreen from './HotelScreen';
import FlightScreen from './FlightScreen';
 
const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};
 
const FirstRoute = () => <HotelScreen />;
const SecondRoute = () => <FlightScreen />;
 
class MyTripScreen extends Component {
  static navigationOptions = {
    title: 'Mi Viaje',
  };
  state = {
    index: 0,
    routes: [
      { key: 'hoteles', title: 'Hoteles' },
      { key: 'vuelos', title: 'Vuelos' },
    ],
  };
 
  handleIndexChange = index => this.setState({ index });
 
  renderHeader = props => <TabBar {...props} style={styles.TabBar} />;
 
  renderScene = SceneMap({
    hoteles: FirstRoute,
    vuelos: SecondRoute,
  });
 
  render() {
    return (
      <TabViewAnimated
        navigationState={this.state}
        renderScene={this.renderScene}
        renderHeader={this.renderHeader}
        onIndexChange={this.handleIndexChange}
        initialLayout={initialLayout}
      />
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  TabBar: {
    backgroundColor: '#3F51B5'
  }
});

export default MyTripScreen;
