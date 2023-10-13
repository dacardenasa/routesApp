import { createStackNavigator } from '@react-navigation/stack';
import { Home, Permissions } from '@screens';

export type RootStackParamsList = {
    Permissions: undefined;
    Home: undefined;
}

const Stack = createStackNavigator<RootStackParamsList>();

export function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Permissions" component={Permissions} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}