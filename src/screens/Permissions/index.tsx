import React, { useCallback } from 'react'
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { PermissionsProps } from '@interfaces';
import { useFocusEffect } from '@react-navigation/native';
import { useLocationPermissions } from '@hooks';
import { PermissionStatus } from '@interfaces';
import { Button } from 'components';

export const Permissions = ({ navigation }: PermissionsProps) => {
    const {
        askLocationsPermissions,
        checkLocationsPermissions,
        registerLocationInfo
    } = useLocationPermissions()

    const handleOnPressButton = async () => {
        const response = await askLocationsPermissions()
        if (response) {
            if (response.status === 'denied' || !response.canAskAgain) {
                Linking.openSettings();
                return;
            }
            registerLocationInfo(response.status)
            navigation.navigate('Home')
        }
    }

    useFocusEffect(
        useCallback(() => {
            checkLocationsPermissions()
                .then((status: PermissionStatus) => {
                    if (status === "granted") {
                        registerLocationInfo(status)
                        navigation.navigate('Home')
                    }
                })
        }, [])
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Screen to handle location permission in app</Text>
            <Button title={'Allow access location'} onPress={handleOnPressButton} />
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
    title: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        marginBottom: 8,
    }
});
