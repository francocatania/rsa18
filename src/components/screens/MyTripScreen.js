import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
 
const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};
 
const FirstRoute = () => <View style={[styles.container, { backgroundColor: '#ff4081' }]} />;
const SecondRoute = () => <View style={[styles.container, { backgroundColor: '#673ab7' }]} />;
 
export default class TabView extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Vuelos' },
      { key: 'second', title: 'Hoteles' },
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
    backgroundColor: 'black'
  }
});
