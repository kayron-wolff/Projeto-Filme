import React from "react";
import {Text, StyleSheet, View} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { global }from '@/components/safeareaview';
import { LinearGradient } from "expo-linear-gradient";
import Login from '@/components/loginbox'
import Logo from '@/components/logo'

export default function app() {
    return (
    <LinearGradient colors={['rgba(106, 171, 255, 0.6)', 'rgba(59, 209, 255, 0.6)', 'rgba(0, 255, 179, 0.6)']} start={{x: 0, y:1}} end={{x:0, y:0}} style={global.view}>
        <SafeAreaView style={global.view}>
            <Logo/>
            <Login/>
        </SafeAreaView>
    </LinearGradient>
    )
}
