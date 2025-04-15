import { StyleSheet, Text, View, Animated, Easing } from 'react-native'
import React, { useEffect, useRef } from 'react'
import Icon from '../assets/download.png';

const LoadingScreen = () => {
  // Create an animated value
  const bounceValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Start the bouncing animation when component mounts
    bounceValue.setValue(0); // Start from 0
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceValue, {
          toValue: -30, // Move up
          duration: 300,
          useNativeDriver: true,
          easing: Easing.out(Easing.quad)
        }),
        Animated.timing(bounceValue, {
          toValue: 0, // Return to original position
          duration: 300,
          useNativeDriver: true,
          easing: Easing.in(Easing.quad)
        })
      ])
    ).start();
  }, []);

  // Interpolate the animated value for translateY
  const translateY = bounceValue.interpolate({
    inputRange: [-30, 0],
    outputRange: [-30, 0]
  });

  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{ translateY }] }}>
        <Animated.Image source={Icon} style={styles.image} />
      </Animated.View>
    </View>
  )
}

export default LoadingScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#92E3A9'
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: "cover",
    }
})