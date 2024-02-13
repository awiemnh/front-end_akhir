import React, { useEffect } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('App');
        }, 3000); // Ubah angka ini jika Anda ingin mengubah durasi splash screen
    }, []);

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#640D14" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e9ebee',
    },
});

export default SplashScreen;