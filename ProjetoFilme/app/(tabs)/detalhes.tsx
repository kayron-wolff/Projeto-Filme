import React from "react";
import {Text, StyleSheet, Image, View} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { global }from '@/components/safeareaview';
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams } from "expo-router";


export default function app() {
    const {filmeImg, filmeName, filmeDesc, a, b, c} = useLocalSearchParams();

    return (
        <LinearGradient colors={[a,b,c] as [string, string, ...string[]]} start={{x: 1, y:1}} end={{x:0, y:0}} style={global.view}>
            <SafeAreaView style={global.view}>
                <View style={styles.container}>
                <Image source={{ uri: String(filmeImg)}} style={styles.filmeImg}/>
                <Text style={styles.title}>{filmeName}</Text>
                </View>
                <Text>{filmeDesc}</Text>
            </SafeAreaView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    filmeImg: {
        width: 150,
        height: 250,
        
        borderRadius: 10,
        marginBottom: 20,
    },
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 10
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff'
    }

})