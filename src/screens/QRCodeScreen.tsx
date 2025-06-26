import React from 'react';
import { View, StyleSheet } from 'react-native';
import QRCodeScanner from '../components/QRCodeScanner';

export default function QRCodeScreen() {
    return (
        <View style={styles.container}>
            <QRCodeScanner />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});