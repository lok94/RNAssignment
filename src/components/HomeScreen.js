import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';

const HomeScreen = (props) => {
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