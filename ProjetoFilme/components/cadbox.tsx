import React,{useState} from "react";
import { Text, StyleSheet, View, TouchableOpacity, Dimensions,TextInput } from 'react-native';

const {width, height} = Dimensions.get('window');

export default function CadBox() {
    return (
        <View style={style.container}>
            <View style={style.box}>
            <Text style={style.title}>Cadastro</Text>
            <Text style={style.label}>Nome</Text>
            <TextInput 
            style={style.input}
            placeholder="Crie um Nome de Usuário"
            
            />
            <TouchableOpacity style={style.btn}>
                <Text style={style.btntxt}>Registrar</Text>
            </TouchableOpacity>
        </View>
        </View>
        
    )
}

const style = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderRadius: 40,
        borderColor: 'white',
        minWidth: 250,
        minHeight: 25,
        color: 'white',
        textAlign: 'center'

    },
    label:{
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
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
        borderRadius: 8,
        backgroundColor: 'rgba(200,200,200,0.3)',
        marginVertical: 8
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 12,
        color: 'white'
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
        borderRadius: 6,
        margin: 12
    }
})