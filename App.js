import React from 'react';
import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation';
import HomeScreen from './src/components/screens/HomeScreen';
import AgendaScreen from './src/components/screens/AgendaScreen';
import MyTripScreen from './src/components/screens/MyTripScreen';
import MoreScreen from './src/components/screens/MoreScreen';
import Login from './src/components/screens/Login';
import SplashScreen from './src/components/screens/SplashScreen';

class App extends React.Component {
  render() {
    return (
      <SplashLoginStack />
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

const TabNav = TabNavigator(
  {
    Inicio: { screen: HomeStack },
    Agenda: { screen: AgendaStack },
    'Mi Viaje': { screen: MyTripStack },
    Más: { screen: MoreStack }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Agenda') {
          iconName = `ios-list-box${focused ? '' : '-outline'}`;
        }
  
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        // return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);

const SplashLoginStack = StackNavigator(
  {
    Splash: {
      screen: SplashScreen
    },
    Login: {
      screen: Login
    },
    HomeRoutes: {
      screen: TabNav
    }
  },
  {
    headerMode: 'none',
    gesturesEnabled: false
  }
);

export default App;
