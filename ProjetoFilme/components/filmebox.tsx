import React from "react";
import {Text, StyleSheet, View, Image} from 'react-native';

type Props = {
    filmeImg: string;
    filmeName: string;
    filmeDesc: string;
};

export default function ItemBox({filmeImg, filmeName, filmeDesc}: Props) {
    return (
        <View style={style.conateiner}>
            <Image source={ {uri: filmeImg} } style={style.img}/>
            <View style={style.c}>
                <Text style={style.title}>{filmeName}</Text>
                <Text style={style.desc}>{filmeDesc}</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    conateiner: {
        borderRadius: 20,
        padding: 12,
        backgroundColor: 'rgba(255,255,255,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 6,
        flexDirection: 'row'
    },
    img:{
        width: 120,
        height: 220,
        borderRadius: 12,
        marginRight: 12
    },
    c:{
        flexDirection: 'column'
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        flexWrap: 'wrap',
        maxWidth: 250
        
    },
    desc:{
        fontSize: 16,
        marginTop: 8,
        flexWrap: 'wrap',
        maxWidth: 250
    }
})