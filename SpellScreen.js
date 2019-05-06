import React from 'react';
import { StyleSheet, Text, ScrollView, AsyncStorage, } from 'react-native';

export default class SpellScreen extends React.Component {
    static navigationOptions = { title: 'Spell' };

    constructor(props) {
        super(props);
        this.state = {
            name: '', desc: [], higher_level: [], page: '', range: '', components: [], material: 'none', duration: '', concentration: '', casting_time: '', level: 0, school: ''};
    }

    componentDidMount() {
        this.retrieveData();
    }

    retrieveData = async () => {
        try {
            let id = await AsyncStorage.getItem('url');
            this.loadSpell(id);
            } catch (error) {
                console.log(error)
            }
          };

    loadSpell = (url) => {
                fetch(url)
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({ name: responseJson.name, desc: responseJson.desc, higher_level: responseJson.higher_level, page: responseJson.page, 
                        range: responseJson.range, components: responseJson.components, material: '(' + responseJson.material + ')', duration: responseJson.duration,
                        concentration: responseJson.concentration, casting_time: responseJson.casting_time, level: responseJson.level, school: responseJson.school.name});
                });
            }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <ScrollView style={styles.spellInfo}>
                <Text style={styles.title}>{this.state.name}</Text>
                <Text>Level {this.state.level} {this.state.school}</Text>
                <Text>Casting time: {this.state.casting_time}</Text>
                <Text>Range: {this.state.range}</Text>
                <Text>Components: {this.state.components} {this.state.material}</Text>
                <Text>Duration: {this.state.duration}</Text>
                <Text>Concentration: {this.state.concentration}</Text>
                <Text>{"\n"}{this.state.desc}</Text>
                <Text>{this.state.higher_level}</Text>
                <Text>Page: {this.state.page}</Text>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    spellInfo: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 100,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});