import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native'
import React from 'react'

const OnboardingItem = ({ item }) => {
const {width} = useWindowDimensions();
  return (
    <View style={[styles.container, {width}]}>
        <Image source={item.image} style={[styles.image, {width, resizeMode: 'contain'}]}/>
         
         <View style={{ flex: 0.3 }}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
         </View>
    </View>
  )
}

export default OnboardingItem

const styles = StyleSheet.create({
container:{

},
image: {
    flex: 0.7,
    justifyContent: "center"
},
title: {
  fontWeight: '900',
  fontSize: 48,       // Very large size
  marginBottom: 16,
  color: "#92E3A9",
  textAlign: 'center',
  letterSpacing: 0.5, // Slightly expanded letters
 // ALL CAPS STYLE

},
description:{
    fontWeight: '600',
    color: '#62656b',
    fontSize: 20, 
    textAlign: 'center',
    paddingHorizontal: 64,
}
})