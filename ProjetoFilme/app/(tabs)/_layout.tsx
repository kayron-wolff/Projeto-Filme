import {Tabs} from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { hide } from 'expo-router/build/utils/splash';

export default function TabLayout() {
    return (
    <Tabs
    screenOptions={{
      tabBarShowLabel: false,
    tabBarStyle: {
      backgroundColor: 'rgba(255,255,255,0.2)',
      backdropFilter: 'blur(10px)',
      borderTopWidth: 0,
      height: 40,
      position:'absolute',
      left:20,
      right:20,
      borderRadius:30,
      margin:10
    },
    tabBarActiveTintColor: '#fff',
    tabBarInactiveTintColor: '#000',
    tabBarLabelStyle: {
      fontSize: 12,
    },
  }}
    >
        {/*<Tabs.Screen name='index' options={{href: null, headerShown: false, tabBarStyle: {display: 'none'}}}/>
        <Tabs.Screen name='login' options={{href: null, headerShown: false, tabBarStyle: {display: 'none'}}}/>*/}
          <Tabs.Screen name='detalhes' options={{title:'Detalhes', tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="movie-filter-outline" size={size} color={color} />
            ), headerShown: false}}/>
            <Tabs.Screen name='home' options={{title:'Início', tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
            ), headerShown: false}}/>
            <Tabs.Screen name='perfil' options={{title:'Conta', tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='account-outline' size={size} color={color} />
            ), headerShown: false}}/>
    </Tabs>
    )
}


