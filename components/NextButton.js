import { StyleSheet, View, Animated, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Svg, { G, Circle } from 'react-native-svg';
import React, { useEffect, useRef } from 'react';

const NextButton = ({ percentage , scrollTo}) => {
    const size = 90;
    const strokeWidth = 2;
    const center = size / 2;
    const radius = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;

    const progressAnimation = useRef(new Animated.Value(0)).current;
    const progressRef = useRef(null);

    const animation = (toValue) => {
        return Animated.timing(progressAnimation, {
            toValue,
            duration: 200,
            useNativeDriver: true,
        }).start();
    };

    useEffect(() => {
        animation(percentage);
    }, [percentage]);

    useEffect(() => {
        progressAnimation.addListener((value) => {
            const strokeDashoffset = circumference - (circumference * value.value) / 100;
            if (progressRef?. current){
                progressRef.current.setNativeProps({
                    strokeDashoffset
                })
            }
        }, [percentage]);

        return () => {
            progressAnimation.removeAllListeners();
        };
    }, []);

    return (
        <View style={styles.container}>
            <Svg width={size} height={size}>
                <G rotation="-90" origin={center}>
                    <Circle 
                        stroke="#E6E7E8"
                        cx={center} 
                        cy={center} 
                        r={radius}
                        strokeWidth={strokeWidth}  
                    />
                    <Circle
                        stroke="#92E3A9"
                        cx={center}
                        cy={center}
                        r={radius}
                        strokeWidth={strokeWidth} 
                        strokeDasharray={circumference}
                    />
                </G>
            </Svg>

            <TouchableOpacity onPress={scrollTo} style={styles.button} activeOpacity={0.6}>
                <AntDesign name="arrowright" size={32} color="#fff" />
            </TouchableOpacity>
        </View>
    );
};

export default NextButton;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
    },
    button: {
        position: 'absolute',
        backgroundColor: '#92E3A9',
        borderRadius: 100,
        padding: 10,
    },
});