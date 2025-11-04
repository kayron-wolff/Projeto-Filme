import React, { use } from "react";
import {Text, StyleSheet, View} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
/*import * as Font from 'expo-font';
import {useFonts} from 'expo-font';

const [customFonts] = useFonts({
    'Arial-Rounded-MT-Bold': require('@/assets/fonts/ARLRDBD.TTF'),
    'Harlow-Solid': require('@/assets/fonts/HARLOWSI.TTF'),
    'Lucida': require('@/assets/fonts/lucida.TTF')
});*/

export default function Logo() {
    return (
        
        <View style={styles.container}>
            <LinearGradient colors={['rgba(134, 134, 134, 0.6)', 'rgba(97, 96, 96, 0.6)', 'rgba(75, 74, 74, 0.6)']} start={{x: 0, y:1}} end={{x:0, y:1}} style={styles.gradient}>
                <Text style={styles.text}>CINEFilme</Text>
                <Text style={styles.subtxt}>Seus Filmes Favoritos Em Um Só Lugar</Text>
            </LinearGradient>
        </View>
        
    )
}

const styles = StyleSheet.create({
    gradient:{
        borderRadius: 20,
        padding: 20
    },
    container: {
        alignItems: 'center',
        marginBottom: 20,
        top: 30,
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
        
    },
    subtxt: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});