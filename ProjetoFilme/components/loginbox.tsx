import React from "react";
import {Text, StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import { useState } from "react";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login() {
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    
    async function getSenha() {
        try {
            const storedSenha = await AsyncStorage.getItem('senha');
            return storedSenha;
        } catch (error) {
            console.log('Erro ao recuperar a senha:', error);
            return null;
        }
    }

    async function getEmail() {
        try {
            const storedSenha = await AsyncStorage.getItem('email');
            return storedSenha;
        } catch (error) {
            console.log('Erro ao recuperar a senha:', error);
            return null;
        }
    }

    const rout = useRouter();
        
    const alternarLoading = async () => {
        if(email == await getEmail() && senha == await getSenha()){
            setTimeout(() => {
                setLoading(false);
                rout.push('/(tabs)/home');
            }, 3000);
            setLoading(true);
        }else{
            setTimeout(()=>{
                rout.push('/')
            })
        }
    }

    return (
        <View style={style.container}>
            <View style={style.box}>
                <Text style={style.title}>Login</Text>
                <Text style={style.label}>Digite seu E-mail</Text>
                <TextInput
                style={style.input}
                placeholder="Digite seu E-mail"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                />
                <Text style={style.label}>Digite sua Senha</Text>
                <TextInput
                style={style.input}
                placeholder="Digite sua Senha"
                secureTextEntry={true}
                value={senha}
                onChangeText={setSenha}
                keyboardType="visible-password"
                />
                <TouchableOpacity style={style.btn} onPress={alternarLoading} disabled={loading}>
                    <Text style={style.btntxt}>{loading ? 'Aguarde...' : 'Entrar'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderRadius: 40,
        borderColor: 'black',
        minWidth: 300,
        minHeight: 40,
        color: 'black',
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 20

    },
    label:{
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black'
    },
    container:{
        /*... StyleSheet.absoluteFillObject,*/
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        padding: 12,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        borderRadius: 20,
        backgroundColor: 'rgba(200,200,200,0.2)',
        marginVertical: 8
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 12,
        color: 'black',
        textAlign: 'center'
    },
    btntxt: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    },
    btn: {
        height: 40,
        backgroundColor: 'rgba(0,120,200,0.8)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 36,
        margin: 12
    }
})