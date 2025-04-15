import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native';

const LoginScreen = () => {
    const clearOnboarding = async () => {
        try{
            await AsyncStorage.setItem('@viewedOnboarding', 'true');}
           catch (err){ console.log('Error @setItem: ', err); }
        }

  return (
    <View>
      <Text>LoginScreen</Text>
      <TouchableOpacity onpress={clearOnboarding}>
        Clear Cache
      </TouchableOpacity>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})