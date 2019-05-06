import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {title: 'Home',};
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Welcome!</Text>
        <Text>Select a function to get started.</Text>
        <Button onPress={() => navigate('Dice')} title="Dice Roller"/>
        <Button onPress={() => navigate('Search')} title="5e Compendium 23"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
