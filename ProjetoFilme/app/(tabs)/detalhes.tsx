import React from "react";
import {Text, StyleSheet, View, Button} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { global }from '@/components/safeareaview';
import { LinearGradient } from "expo-linear-gradient";


export default function app() {
    return (
        <LinearGradient colors={['rgb(23,0,28)', 'rgb(30,0,40)', 'rgb(23,0,28)']} start={{x: 1, y:1}} end={{x:0, y:0}} style={global.view}>
            <SafeAreaView style={global.view}>
                <Text>Olá Pablo Vittar!! Oh~</Text>
            </SafeAreaView>
        </LinearGradient>
    )
}


