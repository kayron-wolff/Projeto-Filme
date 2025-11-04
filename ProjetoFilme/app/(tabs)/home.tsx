import React from "react";
import {Text, StyleSheet, View} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { global }from '@/components/safeareaview';
import {LinearGradient} from 'expo-linear-gradient';


export default function app() {
    return (
        <LinearGradient colors={['rgba(0, 26, 255, 1)', 'rgba(75, 174, 255, 1)', 'rgba(151, 179, 255, 1)']} start={{x: 0, y:1}} end={{x:0, y:0}} style={global.view}>
            <SafeAreaView style={global.view}>
                <Text>Olá Pablo Vittar!! Oh~</Text>
            </SafeAreaView>
        </LinearGradient>
        
    )
}
