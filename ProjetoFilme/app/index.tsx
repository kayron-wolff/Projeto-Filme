import React from "react";
import {Text, StyleSheet, View, TouchableOpacity, TextInput} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { global }from '@/components/safeareaview';
import { useRouter } from "expo-router";
import CadBox from "@/components/cadbox";
import { LinearGradient } from "expo-linear-gradient";
import Logo from "@/components/logo";


export default function app() {
    const tout = useRouter();
    return (
    <LinearGradient colors={['rgba(52, 255, 120, 0.55)', 'rgba(2, 139, 54, 0.49)', 'rgba(127, 155, 0, 0.47)']} start={{x: 1, y:0}} end={{x:0, y:1}} style={global.view}>
        <SafeAreaView style={global.view}>
            <Logo/>
            <CadBox/>
        </SafeAreaView>
    </LinearGradient>
    )
}

const styles = StyleSheet.create({
    btntxt: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    btn: {
        height: 30,
        alignSelf: 'flex-start',
        backgroundColor: 'rgba(60,90,120,0.7)',
        justifyContent: 'center',
        padding: 8
    }

})