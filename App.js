import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import HomeScreen from './src/components/HomeScreen';
import AgendaScreen from './src/components/AgendaScreen';
import MyTripScreen from './src/components/MyTripScreen';
import MoreScreen from './src/components/MoreScreen';

class App extends React.Component {
  render() {
    // const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={null}>
        <TabNav />
      </Provider>
    );
  }
}

// ROUTING - NAVIGATION

const HomeStack = StackNavigator({
  HomeRoot: { screen: HomeScreen }
});

const AgendaStack = StackNavigator({
  AgendaRoot: { screen: AgendaScreen }
});

const MyTripStack = StackNavigator({
  MyTripRoot: { screen: MyTripScreen }
});

const MoreStack = StackNavigator({
  MoreRoot: { screen: MoreScreen }
});

const TabNav = TabNavigator({
  Home: { screen: HomeStack },
  Agenda: { screen: AgendaStack },
  'My Trip': { screen: MyTripStack },
  More: { screen: MoreStack }
});

export default App;
