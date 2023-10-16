import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface IButtonProps {
    title: string;
    onPress: () => void;
}

export const Button = ({ title, onPress }: IButtonProps) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 45,
        borderRadius: 4,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    buttonTitle: {
        color: '#fff',
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
    },
    title: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
    }
});