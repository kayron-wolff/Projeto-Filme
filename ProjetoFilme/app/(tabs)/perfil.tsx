import React from "react";
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { global } from '@/components/safeareaview';
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import { useRouter } from "expo-router";


export default function app() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            const storedNome = await AsyncStorage.getItem('nome');
            const storedEmail = await AsyncStorage.getItem('email');
            if (storedNome) setNome(storedNome);
            if (storedEmail) setEmail(storedEmail);
        }
        fetchData();
    }, []);

    return (
        <LinearGradient colors={['rgba(69, 143, 1, 0.6)','rgba(0, 155, 90, 0.6)0)', 'rgba(0, 143, 148, 0.6)']} start={{x: 0, y:1}} end={{x:1, y:1}} style={global.view}>
            <SafeAreaView style={global.view}>
                <Text style={styles.welcomeText}>Olá <Text style={styles.name}>{nome}</Text>!!</Text>
                <Text style={styles.email}>{email}</Text>
                <View style={styles.alignBtns}>
                <TouchableOpacity style={styles.btns} onPress={() => router.push('/')}>
                    <Text>Alterar Senha</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btns} onPress={() => router.push('/')}>
                    <Text>Alterar Email</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btns} onPress={() => router.push('/')}>
                    <Text>Sair</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btns} onPress={() => router.push('/home')}>
                    <Text>Página Inicial</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btns} onPress={() => router.push('/perfil')}>
                    <Text>Recarregar</Text>
                </TouchableOpacity>
                </View>
            </SafeAreaView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    welcomeText: {
        fontSize: 24,
        textAlign: 'center'
    },
    name:{
        fontWeight: 'bold'
    },
    email:{
        fontSize: 18,
        textAlign: 'center'
    },
    btns:{
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        width: 120,
    },
    alignBtns:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30,
        flexWrap: 'wrap'
    }
})


