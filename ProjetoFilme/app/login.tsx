import React from "react";
import {Text, StyleSheet, View} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { global }from '@/components/safeareaview';



export default function app() {
    return (
        
    <SafeAreaView style={global.view}>
        <Text>Olá Pablo Vittar!! Oh~</Text>
    </SafeAreaView>
    )
}
