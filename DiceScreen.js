import React from 'react';
import { StyleSheet, Button, Text, ScrollView, View, Alert, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class DiceScreen extends React.Component {
    static navigationOptions = { title: 'Dice', };

    constructor(props) {
        super(props);
        this.state = {
            four: 1,
            six: 1,
            eight: 1,
            ten: 1,
            twelve: 1,
            twenty: 1,
            result4: '',
            result6: '',
            result8: '',
            result10: '',
            result12: '',
            result20: '',
        }
    }

    i4 = (event) => {
        this.setState((prevState) => {
            return { four: prevState.four + 1 }
        });
    }

    d4 = (event) => {
        this.setState((prevState) => {
            if (this.state.four > 0) {
                return { four: prevState.four - 1 }
            }
        });
    }

    i6 = (event) => {
        this.setState((prevState) => {
            return { six: prevState.six + 1 }
        });
    }

    d6 = (event) => {
        this.setState((prevState) => {
            if (this.state.six > 0) {
                return { six: prevState.six - 1 }
            }
        });
    }

    i8 = (event) => {
        this.setState((prevState) => {
            return { eight: prevState.eight + 1 }
        });
    }

    d8 = (event) => {
        this.setState((prevState) => {
            if (this.state.eight > 0) {
                return { eight: prevState.eight - 1 }
            }
        });
    }

    i10 = (event) => {
        this.setState((prevState) => {
            return { ten: prevState.ten + 1 }
        });
    }

    d10 = (event) => {
        this.setState((prevState) => {
            if (this.state.ten > 0) {
                return { ten: prevState.ten - 1 }
            }
        });
    }

    i12 = (event) => {
        this.setState((prevState) => {
            return { twelve: prevState.twelve + 1 }
        });
    }

    d12 = (event) => {
        this.setState((prevState) => {
            if (this.state.twelve > 0) {
                return { twelve: prevState.twelve - 1 }
            }
        });
    }

    i20 = (event) => {
        this.setState((prevState) => {
            return { twenty: prevState.twenty + 1 }
        });
    }

    d20 = (event) => {
        this.setState((prevState) => {
            if (this.state.twenty > 0) {
                return { twenty: prevState.twenty - 1 }
            }
        });
    }
    roll4 = (event) => {
        let r4 = '';
        let total4 = 0;
        let random4 = 0;
        for (i = 0; i < this.state.four; i++) {
            random4 = Math.floor(Math.random() * 4 + 1)
            r4 += JSON.stringify(random4) + ", "
            total4 += random4
        }
        this.setState({
            result4: r4 + "total: " + total4
        });
    }

    roll6 = (event) => {
        let r6 = '';
        let total6 = 0;
        let random6 = 0;
        for (i = 0; i < this.state.six; i++) {
            random6 = Math.floor(Math.random() * 6 + 1)
            r6 += JSON.stringify(random6) + ", "
            total6 += random6
        }
        this.setState({
            result6: r6 + "total: " + total6
        });
    }

    roll8 = (event) => {
        let r8 = '';
        let total8 = 0;
        let random8 = 0;
        for (i = 0; i < this.state.eight; i++) {
            random8 = Math.floor(Math.random() * 8 + 1)
            r8 += JSON.stringify(random8) + ", "
            total8 += random8
        };
        this.setState({
            result8: r8 + "total: " + total8
        });
    }

    roll10 = (event) => {
        let r10 = '';
        let total10 = 0;
        let random10 = 0;
        for (i = 0; i < this.state.ten; i++) {
            random10 = Math.floor(Math.random() * 10 + 1)
            r10 += JSON.stringify(random10) + ", "
            total10 += random10
        }
        this.setState({
            result10: r10 + "total: " + total10
        });
    }

    roll12 = (event) => {
        let r12 = '';
        let total12 = 0;
        let random12 = 0;
        for (i = 0; i < this.state.twelve; i++) {
            random12 = Math.floor(Math.random() * 12 + 1)
            r12 += JSON.stringify(random12) + ", "
            total12 += random12
        }
        this.setState({
            result12: r12 + "total: " + total12
        });
    }

    roll20 = (event) => {
        let r20 = '';
        let total20 = 0;
        let random20 = 0;
        for (i = 0; i < this.state.twenty; i++) {
            random20 = Math.floor(Math.random() * 20 + 1)
            r20 += JSON.stringify(random20) + ", "
            total20 += random20
        }
        this.setState({
            result20: r20 + "total: " + total20
        });
    }

    rollAll = (event) => {
        this.roll4();
        this.roll6();
        this.roll8();
        this.roll10();
        this.roll12();
        this.roll20();
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView style={styles.container}>
                <Text>Dice Roller</Text>
                <View style={styles.dice}>
                    <Ionicons name="dice-d4" size={20} color={"black"} />
                    <Button onPress={this.d4} title="-" />
                    <Text>{this.state.four}</Text>
                    <Button onPress={this.i4} title="+" />
                    <Button onPress={this.roll4} title="Roll!" />
                </View>
                <View>
                    <Text>Result: {this.state.result4}</Text>
                </View>

                <View style={styles.dice}>
                    <Ionicons name="dice-d6" size={20} color={"black"} />
                    <Button onPress={this.d6} title="-" />
                    <Text>{this.state.six}</Text>
                    <Button onPress={this.i6} title="+" />
                    <Button onPress={this.roll6} title="Roll!" />
                </View>
                <View>
                    <Text>Result: {this.state.result6}</Text>
                </View>

                <View style={styles.dice}>
                    <Ionicons name="dice-d8" size={20} color={"black"} />
                    <Button onPress={this.d8} title="-" />
                    <Text>{this.state.eight}</Text>
                    <Button onPress={this.i8} title="+" />
                    <Button onPress={this.roll8} title="Roll!" />
                </View>
                <View>
                    <Text>Result: {this.state.result8}</Text>
                </View>

                <View style={styles.dice}>
                    <Ionicons name="dice-d10" size={20} color={"black"} />
                    <Button onPress={this.d10} title="-" />
                    <Text>{this.state.ten}</Text>
                    <Button onPress={this.i10} title="+" />
                    <Button onPress={this.roll10} title="Roll!" />
                </View>
                <View>
                    <Text>Result: {this.state.result10}</Text>
                </View>

                <View style={styles.dice}>
                    <Ionicons name="dice-d12" size={20} color={"black"} />
                    <Button onPress={this.d12} title="-" />
                    <Text>{this.state.twelve}</Text>
                    <Button onPress={this.i12} title="+" />
                    <Button onPress={this.roll12} title="Roll!" />
                </View>
                <View>
                    <Text>Result: {this.state.result12}</Text>
                </View>

                <View style={styles.dice}>
                    <Ionicons name="dice-d20" size={20} color={"black"} />
                    <Button onPress={this.d20} title="-" />
                    <Text>{this.state.twenty}</Text>
                    <Button onPress={this.i20} title="+" />
                    <Button onPress={this.roll20} title="Roll!" />
                </View>
                <View>
                    <Text>Result: {this.state.result20}</Text>
                </View>

                <Button onPress={(event) => { this.rollAll(); }} title="Roll All!" />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    dice: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
});
