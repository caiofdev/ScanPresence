import { useState, useRef } from 'react';
import { StyleSheet, Button, View, Modal, Alert } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';

export default function QRCodeScanner() {
    const [ModalIsVisible, setModalIsVisible] = useState(false);
    const [permission, requestPermissions] = useCameraPermissions();
    const qrCodeLock = useRef(false);

    async function handleOpenCamera() {
        try {
            const { granted } = await requestPermissions();

            if(!granted) {
                return Alert.alert("Você precisa permitir o acesso à câmera para ler QR Codes.");
            }

            setModalIsVisible(true);
            qrCodeLock.current = false;
        } catch (error) {
            console.log(error);
        }
    }

    function handleQRCodeScanned(data: string) {
        setModalIsVisible(false);
        Alert.alert("QR Code Lido", data);
    }

    return (
        <View style={styles.container}>
            <Button title="Ler QR Code" onPress={handleOpenCamera} />

            <Modal visible={ModalIsVisible} style={{ flex: 1 }}>
                <CameraView 
                style={{ flex: 1 }} 
                facing="back"
                onBarcodeScanned={({ data }) => {
                    if(data && !qrCodeLock.current){
                        qrCodeLock.current = true;
                        setTimeout(() => handleQRCodeScanned(data), 500);
                    }
                }}
                />

                <View style={styles.footer}>
                    <Button title="Fechar" onPress={() => setModalIsVisible(false)} />
                </View>
            </Modal>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },

    footer: {
        position: "absolute",
        bottom: 32,
        left: 32,
        right: 32,
    },
});