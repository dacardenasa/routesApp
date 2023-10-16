import * as Location from 'expo-location';

import { userLocationStore } from '@state';
import { PermissionStatus } from '@interfaces';

export const useLocationPermissions = () => {
    const registerLocationData = userLocationStore(state => state.registerLocationData)
    const isEnabledLocation = userLocationStore(state => state.isEnabledLocation)

    async function askLocationsPermissions () {
        const { status, canAskAgain } = await Location.requestForegroundPermissionsAsync();
        return { status, canAskAgain }
    }

    async function checkLocationsPermissions () {
        const { status } = await Location.getForegroundPermissionsAsync();
        return status
    }

    async function registerLocationInfo (status: PermissionStatus) {
        if (status === "denied" || status === "undetermined") {
            registerLocationData({ isEnabledLocation: false })
            return
        }
        const userLocation = await Location.getCurrentPositionAsync({});
        registerLocationData({ location: userLocation, isEnabledLocation: true })
    }

    return {
        askLocationsPermissions,
        checkLocationsPermissions,
        registerLocationInfo,
        isEnabledLocation
    }
}
