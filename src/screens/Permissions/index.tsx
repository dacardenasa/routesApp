import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export const Permissions = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Screen to handle location permission in app</Text>
        <TouchableOpacity style={styles.button} onPress={() => console.info('ask permissions')}>
            <Text style={styles.buttonTitle}>Allow access locations permissions</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Permissions

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16
    },
    button: {
        width: '100%',
        height: 40,
        borderRadius: 8,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonTitle: {
        color: '#fff',
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
    },
    title: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        marginBottom: 8,
    }
});
