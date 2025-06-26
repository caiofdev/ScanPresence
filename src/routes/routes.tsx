import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import QRCodeScreen from '../screens/QRCodeScreen';

type TabProps = {
    Attendance: undefined;
    Scan: undefined;
    Presence: undefined;
}

const Tab = createBottomTabNavigator<TabProps>();

const Screen = ({ text }: { text: string }) => {
    return (
        <View>
            <Text>{text}</Text>
        </View>
    );
};

interface MyTabsProps {}

export const Routes: React.FunctionComponent<MyTabsProps> = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Attendance" component={Screen} options={{
                title: 'Minhas Faltas',
                tabBarIcon: () => <MaterialIcons name="back-hand" size={24} /> 
                }} />
            <Tab.Screen name="Scan" component={QRCodeScreen} options={{
                title: 'Ler QR Code',
                tabBarIcon: () => <MaterialIcons name="qr-code-scanner" size={24} /> 
                }} />
            <Tab.Screen name="Presence" component={Screen} options={{
                title: 'Presentes Hoje',
                tabBarIcon: () => <MaterialIcons name="groups" size={24} /> 
                }} />
        </Tab.Navigator>
    )
}