import { ActivityIndicator, StyleSheet, Text, View,  } from 'react-native'
import React, { useEffect, useState } from 'react'
import Onboarding from '../components/Onboarding'
import LoadingScreen from '../components/LoadingScreen'
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from '../components/LoginScreen'

const Loading = () =>{
  <View>
    <ActivityIndicator size={large}/>
  </View>;
}

const index = () => {
  const [isShowSplash, setIsShowSplash] = useState(true);
  const [loading, setLoading] = useState(true);
  const [viewedOnboarding, setViewOnboarding] = useState(false);

  const checkOnboarding = async () => {
    try {const value = await AsyncStorage.getItem('@viewedOnboarding');
      if (value !== null){
        setViewedOnboarding(true)
      }
    }

    catch (err){console.log('Error @checkOnboarding: ', err)}
    finally{setLoading(false)}
  }

  useEffect(() => {
    setTimeout(() => {
      setIsShowSplash(false)
    }, 5000);
  })

  useEffect(() => {
    checkOnboarding();
  }, [])

  return (<View style={styles.container}>{isShowSplash ? <LoadingScreen /> : <Onboarding/> }</View>);
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
