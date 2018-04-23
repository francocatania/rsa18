import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import Hotel from '../Hotel';
// import Flight from '../Flight';
 
const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};
 
const FirstRoute = () => <Hotel />;
const SecondRoute = () => <View style={[styles.container, { backgroundColor: '#ff4081' }]} />;
 
export default class TabView extends React.Component {
  static navigationOptions = {
    title: 'Mi Viaje',
  };
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Hoteles' },
      { key: 'second', title: 'Vuelos' },
    ],
  };
 
  handleIndexChange = index => this.setState({ index });
 
  renderHeader = props => <TabBar {...props} style={styles.TabBar} />;
 
  renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
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
