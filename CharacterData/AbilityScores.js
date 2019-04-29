import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

export default class AbilityScores extends React.Component {
    static navigationOptions = {title: 'AbilityScores'};
    state = { full_name: '', desc: [], skills: [] }

    componentDidMount() {
        this.loadScores();
    }

    loadScores = () => {
        fetch('http://www.dnd5eapi.co/api/ability-scores')
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>

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