import React from 'react';
import { StyleSheet, Text, ScrollView, Alert, AsyncStorage, View, } from 'react-native';

export default class MonsterScreen extends React.Component {
    static navigationOptions = { title: 'Monster' };

    constructor(props) {
        super(props);
        this.state = {
            name: '', size: '', type: '', alignment: '', armor_class: 0, hit_points: 0,
            hit_dice: 0, speed: '', strength: 0, dexterity: 0, constitution: 0, intelligence: 0, wisdom: 0,
            charisma: 0, damage_vulnerabilities: 'none', damage_resistances: 'none', damage_immunities: 'none',
            condition_immunities: 'none', senses: 'none', languages: 'none', challenge_rating: 0, 
            special_abilities: [], actions: [], legendary_actions: []};
    }

    loadMonster = () => {
                fetch(this.state.refinedSearch)
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({ name: responseJson.name, size: responseJson.size, type: responseJson.type, alignment: responseJson.alignment,
                            armor_class: responseJson.armor_class, hit_points: responseJson.hit_points, hit_dice: responseJson.hit_dice,
                            speed: responseJson.speed, strength: responseJson.strength, dexterity: responseJson.dexterity, constitution: responseJson.constitution,
                            intelligence: responseJson.intelligence, wisdom: responseJson.wisdom, charisma: responseJson.charisma,
                            damage_vulnerabilities: responseJson.damage_vulnerabilities, damage_resistances: responseJson.damage_resistances, damage_immunities: responseJson.damage_immunities,
                            condition_immunities: responseJson.condition_immunities, senses: responseJson.senses, languages: responseJson.languages, challenge_rating: responseJson.challenge_rating,
                            special_abilities: responseJson.special_abilities, actions: responseJson.actions, legendary_actions: responseJson.legendary_actions});
                });
            }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <ScrollView style={styles.monsterInfo}>
                <Text>{this.state.name}</Text>
                <Text>{this.state.size} {this.state.type}, {this.state.alignment}</Text>
                <Text>AC: {this.state.armor_class}, HP: {this.state.hit_points} ({this.state.hit_dice} HD)</Text>
                <Text>Speed: {this.state.speed}</Text>
                <Text>Senses: {this.state.senses}</Text>
                <Text>Strength: {this.state.strength}, Dexterity: {this.state.dexterity}, Constitution: {this.state.constitution}</Text>
                <Text>Intelligence: {this.state.intelligence}, Wisdom: {this.state.wisdom}, Charisma: {this.state.charisma}</Text>
                <Text>Resistances: {this.state.damage_resistances}</Text>
                <Text>Vulnerabilities: {this.state.damage_vulnerabilities}</Text>
                <Text>Immunities: {this.state.damage_immunities}</Text>
                <Text>Languages: {this.state.languages}</Text>
                <Text>Challenge: {this.state.challenge_rating}</Text>
                <Text>{"\n"}Special abilities</Text>
                {this.state.special_abilities.map((dataItem) =>
                    <View key={dataItem.name}>
                        <Text>{dataItem.name}: {dataItem.desc}</Text>
                    </View>
                )}
                <Text>{"\n"}Actions:</Text>
                {this.state.actions.map((dataItem) =>
                    <View key={dataItem.name}>
                        <Text>{dataItem.name}: {dataItem.desc}</Text>
                    </View>
                )}
                <Text>{"\n"}Legendary Actions</Text>
                {this.state.legendary_actions.map((dataItem) =>
                    <View key={dataItem.name}>
                        <Text>{dataItem.name}: {dataItem.desc}</Text>
                    </View>
                )}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    monsterInfo: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 100,
    },
});