import React from 'react';
import { StyleSheet, Text, ScrollView, FlatList, Alert } from 'react-native';

export default class ShowResults extends React.Component {
    static navigationOptions = { title: 'Results' };

    constructor(props) {
        super(props);
        this.state = { count: 0, results: [], searchType: '' };
    }


    loadResults = () => {
        const url = 'http://www.dnd5eapi.co/api/' + this.state.searchType
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ count: responseJson.count, results: responseJson.results });
            })
            .catch((error) => {
                Alert.alert(error);
            });
    }


    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView style={styles.container}>
                <Text>Number of matches: {this.state.count}</Text>
                <FlatList
                    renderItem={({ item }) => <Text>{item.results.name}</Text>}
                />
            </ScrollView>
        )
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