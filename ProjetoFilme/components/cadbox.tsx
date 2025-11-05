import React,{useState} from "react";
import { Text, StyleSheet, View, TouchableOpacity, TextInput } from 'react-native';
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";



export default function CadBox() {
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const salvarSenha = async (senha: string) => {
            try {
                await AsyncStorage.setItem('senha', senha);
            } catch (error) {
                console.log('Erro ao salvar a senha:', error);
            }
        }
        
        const salvarEmail = async (email: string) => {
            try {
                await AsyncStorage.setItem('email', email);
            } catch (error) {
                console.log('Erro ao salvar o email:', error);
            }
        }
        
        const salvarNome = async (nome: string) => {
            try {
                await AsyncStorage.setItem('nome', nome);
            } catch (error) {
                console.log('Erro ao salvar o nome:', error);
            }
        }

    const rout = useRouter();

    const alternarLoading = () => {
        salvarEmail(email);
        salvarSenha(senha);
        salvarNome(nome);
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            rout.push('/login');
        }, 3000);
    }
    return (
        <View style={style.container}>
            <View style={style.box}>
                <Text style={style.title}>Cadastro</Text>
                <Text style={style.label}>Nome</Text>
                <TextInput 
                style={style.input}
                placeholder="Crie um Nome de Usuário"
                value={nome}
                onChangeText={setNome}
                keyboardType="default"
                />
                <Text style={style.label}>Digite seu E-mail</Text>
                <TextInput
                style={style.input}
                placeholder="Digite seu E-mail"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                />
                <Text style={style.label}>Crie uma Senha</Text>
                <TextInput
                style={style.input}
                placeholder="Crie uma Senha"
                secureTextEntry={true}
                value={senha}
                onChangeText={setSenha}
                keyboardType="visible-password"
                />
                <TouchableOpacity style={style.btn} onPress={alternarLoading} disabled={loading}>
                    <Text style={style.btntxt}>{loading ? 'Aguarde...' : 'Registrar'}</Text>
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