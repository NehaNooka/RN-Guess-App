import React,{useState} from 'react';
import { View, Text, Button, StyleSheet,TouchableWithoutFeedback,Keyboard,Alert } from 'react-native';
import Card from '../components/card'
import Input from '../components/input'
import Colors from '../constants/colors'
import NumberContainer from '../components/NumberContainer'

const StartGameScreeen = props => {
    const [enteredValue,setEnteredValue]=useState('')
    const [confirmed,setConfirmed]=useState(false)
    const [selectedNum,setSelectedNum]=useState()

    const numberInputHandler=inputText=>{

        setEnteredValue(inputText.replace(/[^0-9]/g,''))
    }
    const resetInputHandler=()=>{
        setEnteredValue('');
        setConfirmed(false);
    }
    const confirmInputHandler=()=>{
        const chosenNumber=parseInt(enteredValue)
        if(isNaN(chosenNumber) || chosenNumber<=0 || chosenNumber>99){
            Alert.alert('Invalid Number','Number has to be between 1 to 99',[{text:'Ok',style:'destructive',onPress:resetInputHandler}])
            return;
        }
        setConfirmed(true);
        setSelectedNum(chosenNumber)
        setEnteredValue('');
        Keyboard.dismiss()
    }
let confirmedOutput;
if(confirmed){
    confirmedOutput = <Card style={styles.summaryContainer}><Text>You selected </Text>
    <NumberContainer>{selectedNum}</NumberContainer>
    <Button title="START GAME" />
    </Card>
}

    return (
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a number</Text>
                <Input  style={styles.input} blurOnSubmit autoCapitaliza='none' autoCorrect={false} keyBoardType="number-pad" maxLength={2}
                onChangeText={numberInputHandler}
                value={enteredValue}
                />
                <View style={styles.buttonContainer}>
                <View style={styles.button}> 
                    <Button title="Reset" onPress={resetInputHandler} color={Colors.accent} />
                    </View> 
                    <View style={styles.button}> 
                        <Button title="Confirm" onPress= { confirmInputHandler} color={Colors.primary} />
                        </View> 
                </View>
            </Card>
            {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
    );

}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        marginVertical: 10
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',

    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15

    },
    button: {
        width: 100
    },
    input:{
        width:50,
        textAlign:'center'
    },
    summaryContainer:{
        margin:20,
        alignItems:'center'
    }
});

export default StartGameScreeen;