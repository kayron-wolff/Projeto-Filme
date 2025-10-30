import React from "react";
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { global }from '@/components/safeareaview';
import { useRouter } from "expo-router";
import CadBox from "@/components/cadbox";
import { LinearGradient } from "expo-linear-gradient";


export default function app() {
    const tout = useRouter();
    return (
    <LinearGradient colors={['rgb(23,0,28)', 'rgb(30,0,40)', 'rgb(23,0,28)']} start={{x: 1, y:0}} end={{x:0, y:1}} style={global.view}>
    <SafeAreaView style={global.view}>
        <CadBox />
        <TouchableOpacity style={style.btn} onPress={() => tout.push('/')}>
            <Text style={style.btntxt}>Voltar ao Início</Text>
        </TouchableOpacity>
    </SafeAreaView>
    </LinearGradient>
    )
}

const style = StyleSheet.create({
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