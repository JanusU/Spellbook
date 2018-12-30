import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, } from 'react-native';

export default class Main extends React.Component {
    render(){
        return (
            <View style={styles.container}>

                <View style={styles.header}>
                    <Text>
                        Spellbook Organizer
                    </Text>
                </View>

                <ScrollView style={styles.scrollContainer}>

                </ScrollView>

                <View Style={styles.footer}>

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});