import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
} from "react-native";

const App = () => {

    const [name, setName] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const onPressHandler = () => {
        setSubmitted(!submitted);
    }

    return (
        <View style={styles.body}>
            <Text style={styles.text}>
                Please, write your name
            </Text>
            <TextInput
                style={styles.input}
                placeholder='E.g. Bhavesh'
                onChangeText={(value) => setName(value)}
            />
            <Button 
            title = {submitted ? 'Clear' : 'Submit'}
            onPress = {onPressHandler}
            ></Button>
            { submitted ? 
                <Text style={styles.text}>
                    You are registered as {name}
                </Text>
                :
                null 
            }
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        padding: 20,
        flex: 1,
        backgroundColor: '#1e81b0',
        alignItems: 'center',
    },

    text: {
        color: '#ffffff',
        fontSize: 20,
        margin: 10,
    },

    input: {
        width: 200,
        color: '#ffffff',
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 5,
        textAlign: 'center',
        fontSize: 16,
    },

});

export default App;