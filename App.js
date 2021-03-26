import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header'
import StartGameScreeen from './screens/startGameScreen'

export default function App() {
  return (
    <View style={styles.screen}>
    <Header title="Guess a Num" />
    <StartGameScreeen />
    </View>
  );
}

const styles = StyleSheet.create({
 screen:{
   flex:1
 }
});
