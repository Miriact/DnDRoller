import React from 'react';
import {createAppContainer, createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import DiceScreen from './DiceScreen';
import MonsterScreen from './MonsterScreen';
import SpellScreen from './SpellScreen';

export default class App extends React.Component {
  render() {
    const AppContainer = createAppContainer(AppNavigator);
    return <AppContainer/>;
  }
}

/* const AppNavigator = createBottomTabNavigator({
  Home: {screen: HomeScreen},
  Search: {screen: SearchScreen},
  Dice: {screen: DiceScreen},
}, */

const AppNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Search: {screen: SearchScreen},
  Dice: {screen: DiceScreen},
  Monster: {screen: MonsterScreen},
  Spell: {screen: SpellScreen},
},


{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      if (routeName === 'Home') {
        return <Ionicons name='md-home' size={25} color={tintColor} />;
      } else if (routeName === 'Search') {
        return <Ionicons name='search' size={25} color={tintColor} />;
      } else if (routeName === 'Dice') {
        return <Ionicons name='dice-d20' size={25} color={tintColor} />;
      }
    }
  })
}
);