import React from 'react';
import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation';
import HomeScreen from './src/components/screens/HomeScreen';
import AgendaScreen from './src/components/screens/AgendaScreen';
import MyTripScreen from './src/components/screens/MyTripScreen';
import MoreScreen from './src/components/screens/MoreScreen';
import Login from './src/components/screens/Login';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loginText: '',
      isLoggedIn: false,
      loginCodes: ['Adminadmin', 'Consolid123']
    };
  }
  
  onChangeLoginText(text) {
    this.setState({ loginText: text }, this.checkLoginText);
  }
  
  checkLoginText() {
    if (this.state.loginCodes.includes(this.state.loginText)) {
      this.setState({ isLoggedIn: true });
    }
  }

  render() {
    return (
      this.state.isLoggedIn ? 
        <TabNav /> :
        <Login onChange={this.onChangeLoginText.bind(this)} loginText={this.state.loginText} />
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

export default App;
