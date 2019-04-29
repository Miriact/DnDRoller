import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

export default class SearchScreen extends React.Component {
  static navigationOptions = {title: 'Search',};
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>5e Compendium</Text>
        <Button onPress={() => navigate('Results')} title="Test"/>

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
