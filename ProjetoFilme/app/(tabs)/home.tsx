import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { global }from '@/components/safeareaview';
import {LinearGradient} from 'expo-linear-gradient';
import ItemBox from "@/components/filmebox";
import { Link } from "expo-router";
import { ScrollView } from "react-native";

export default function app() {
    const Miraculous = {
        filmeImg: "https://br.web.img2.acsta.net/c_310_420/pictures/23/07/19/21/06/4174511.jpg",
        filmeName: "Miraculous: As Aventuras de Ladybug - O Filme",
        filmeDesc: "Lançado em 2023, conta a história da série de Miraculous do ponto de vista do dono da empresa produtora da série, Jeremy Zag, em filme músical com muito fan service.",
        a: 'rgba(255, 0, 150, 0.8)',
        b: 'rgba(255, 0, 100, 0.8)',
        c: 'rgba(255, 0, 50, 0.8)'
    };
    const fnaf = {
        filmeImg: "https://tse1.mm.bing.net/th/id/OIP.csGiN7zzXHO92oO6lc79-QAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
        filmeName: 'Five Nights at Freddy\'s - O Pesadelo Sem Fim',
        filmeDesc: `"Five Nights at Freddy's: O Pesadelo Sem Fim" acompanha Mike Schmidt, um jovem vigia noturno que descobre segredos sombrios em uma pizzaria abandonada, onde animatrônicos ganham vida e se tornam assassinos.`,
        a: 'rgba(40, 0, 49, 1)',
        b: 'rgba(60, 1, 80, 1)',
        c: 'rgba(92, 1, 112, 1)'
    };
    const smb = {
        filmeImg: "https://uploads.jovemnerd.com.br/wp-content/uploads/2022/11/super_mario_bros_filme_poster__81029lb0.jpeg",
        filmeName: 'Super Mario Bros - O Filme',
        filmeDesc: `"Super Mario Bros: O Filme", os irmãos encanadores Mario e Luigi são transportados para um mundo mágico onde enfrentam o vilão Bowser para salvar o Reino dos Cogumelos e resgatar Luigi.`,
        a: 'rgba(255, 0, 0, 1)',
        b: 'rgba(255, 153, 0, 1)',
        c: 'rgba(251, 255, 0, 1)'
    };
    const aladdin = {
        filmeImg: "https://tse3.mm.bing.net/th/id/OIP.4uzBnFsDNsLF_ZGvddFq8gHaLH?rs=1&pid=ImgDetMain&o=7&rm=3",
        filmeName: 'Aladdin (2019)',
        filmeDesc: `"Aladdin" (2019) é um remake live-action da Disney que acompanha um jovem humilde que encontra uma lâmpada mágica com um gênio capaz de conceder desejos, e usa essa chance para conquistar o amor da princesa Jasmine e enfrentar o vilão Jafar.`,
        a: 'rgba(255, 0, 0, 1)',
        b: 'rgba(255, 153, 0, 1)',
        c: 'rgba(251, 255, 0, 1)'
    };

    return (
        <LinearGradient colors={['rgba(0, 26, 255, 1)', 'rgba(75, 174, 255, 1)', 'rgba(151, 179, 255, 1)']} start={{x: 0, y:1}} end={{x:0, y:0}} style={global.view}>
            <SafeAreaView style={global.view}>
                <ScrollView style={{paddingBottom: 60}}>
                <Link href={{pathname: '/(tabs)/detalhes', params: {
                    filmeImg: Miraculous.filmeImg,
                    filmeName: Miraculous.filmeName,
                    filmeDesc: Miraculous.filmeDesc,
                    a: Miraculous.a,
                    b: Miraculous.b,
                    c: Miraculous.c
                }}}>
                    <ItemBox {...Miraculous}/>
                </Link>
                <Link href={{pathname: '/(tabs)/detalhes', params: {
                    filmeImg: fnaf.filmeImg,
                    filmeName: fnaf.filmeName,
                    filmeDesc: fnaf.filmeDesc,
                    a: fnaf.a,
                    b: fnaf.b,
                    c: fnaf.c
                }}}>
                    <ItemBox {...fnaf}/>
                </Link>
                <Link href={{pathname: '/(tabs)/detalhes', params: {
                    filmeImg: smb.filmeImg,
                    filmeName: smb.filmeName,
                    filmeDesc: smb.filmeDesc,
                    a: smb.a,
                    b: smb.b,
                    c: smb.c
                }}}>
                    <ItemBox {...smb}/>
                </Link>
                <Link href={{pathname: '/(tabs)/detalhes', params: {
                    filmeImg: aladdin.filmeImg,
                    filmeName: aladdin.filmeName,
                    filmeDesc: aladdin.filmeDesc,
                    a: aladdin.a,
                    b: aladdin.b,
                    c: aladdin.c
                }}}>
                    <ItemBox {...aladdin}/>
                </Link>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
        
    )
}
