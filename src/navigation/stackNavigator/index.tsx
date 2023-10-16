import { useEffect } from 'react';
import { AppState } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { Home, Permissions } from '@screens';
import { useLocationPermissions } from '@hooks';
import { PermissionStatus } from '@interfaces';
import { Loader } from '@components';

export type RootStackParamsList = {
    Permissions: undefined;
    Home: undefined;
}

const Stack = createStackNavigator<RootStackParamsList>();

export function StackNavigator() {
  const {
    checkLocationsPermissions,
    registerLocationInfo,
    isEnabledLocation
  } = useLocationPermissions()

  useEffect(() => {
    AppState.addEventListener('change', (state: string) => {
      if (state !== 'active') return;
      checkLocationsPermissions()
        .then((status: PermissionStatus) => {
            registerLocationInfo(status)
        })
    })
  }, [])

  useEffect(() => {
    checkLocationsPermissions()
        .then((status: PermissionStatus) => {
            registerLocationInfo(status)
        })
  }, [])

  if (typeof isEnabledLocation === "undefined") return <Loader />

  return (
    <Stack.Navigator
      initialRouteName={isEnabledLocation ? "Home" : "Permissions"}
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Permissions" component={Permissions} />
    </Stack.Navigator>
  );
}