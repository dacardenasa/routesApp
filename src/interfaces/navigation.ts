import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { RootStackParamsList } from '@navigation';

export type ScreensProps = StackNavigationProp<RootStackParamsList>;

export type PermissionsProps = StackScreenProps<RootStackParamsList, 'Permissions'>;
export type HomeProps = StackScreenProps<RootStackParamsList, 'Home'>;