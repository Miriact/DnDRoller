import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
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

const AppNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Search: {screen: SearchScreen},
  Dice: {screen: DiceScreen},
  Monster: {screen: MonsterScreen},
  Spell: {screen: SpellScreen},
}
);