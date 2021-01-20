import React, {useEffect}  from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import AsyncStorage from '@react-native-async-storage/async-storage';
import data from '../data/category';
import SplashScreen from 'react-native-splash-screen'

const HomeScreen = (props) => {


  useEffect(() => {
    storeData(data)
    SplashScreen.hide();
  },[])

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('@storage_Key', jsonValue)
  } catch (e) {
    // saving error
  }
}


  return (
    <View style = {styles.container}>
      <TouchableOpacity 
      style = {styles.button}
      onPress={() => props.navigation.navigate('MyModal')} 
      >
          <Text style = {{fontSize : scale(15), fontWeight:'bold'}}>Load List</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor:'#D6DBDF'
    },
    button : {
        width : scale(100),
        height : scale(40),
        backgroundColor : '#6495ED',
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius : scale(5)
    } 
})

export default HomeScreen;