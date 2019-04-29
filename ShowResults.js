import React from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';

export default class ShowResults extends React.Component {
    static navigationOptions = { title: 'Results' };

    constructor(props) {
        super(props);
        this.state = { count: 0, results: [] };
    }


    loadResults = () => {
        const url = 'http://www.dnd5eapi.co/api/ability-scores'
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
            <View style={styles.container}>
                <Text>Number of matches: {this.state.count}</Text>
                <FlatList
                    renderItem={({ item }) => <Text>{item.result.name}</Text>}
                />
            </View>
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