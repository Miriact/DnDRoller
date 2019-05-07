import React from 'react';
import { StyleSheet, Button, Text, View, ScrollView, FlatList, AsyncStorage } from 'react-native';

export default class SearchScreen extends React.Component {

  static navigationOptions = { title: 'Search', };

  constructor(props) {
    super(props);
    this.state = { count: 0, results: [], searchType: '', };
  }

  loadResults = (event) => {
    const url = this.state.searchType
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ count: responseJson.count, results: responseJson.results });
      })
      .catch((error) => {
        Alert.alert(error);
      });
  }

  searchResults = (type) => {
    this.setState({
      searchType: 'http://www.dnd5eapi.co/api/' + type
    });
    this.loadResults();
  }

  refineSearch = (id) => {
    this.storeData(id);

    if (id.includes("monster")) {
      this.props.navigation.navigate('Monster');
    } else if (id.includes("spell")) {
      this.props.navigation.navigate('Spell')
    };
  }

  storeData = async (data) => {
    try {
      await AsyncStorage.setItem('url', data);
    } catch (error) {
      Alert.alert('Error saving data');
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <View style={styles.buttons}>
          <Button onPress={() => this.searchResults('spells')} title="Spells" />
          <Button onPress={() => this.searchResults('monsters')} title="Monsters" />
        </View>
        <ScrollView style={styles.container}>
          <Text>Number of matches: {this.state.count}{"\n"}</Text>
          <FlatList
            keyExtractor={item => item.id}
            renderItem={({ item }) => <Text onPress={() => this.refineSearch(item.url)}>{item.name}</Text>}
            data={this.state.results}
          />
        </ScrollView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  }
});