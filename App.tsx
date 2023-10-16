import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import { StackNavigator } from 'navigation';

import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-Thin': require('./assets/fonts/Poppins-Thin.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null
  }

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
