import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import {
	SafeAreaProvider,
	initialWindowMetrics,
} from 'react-native-safe-area-context';

import * as SplashScreen from 'expo-splash-screen';

import { useFonts } from 'expo-font';
import {
	Inter_200ExtraLight,
	Inter_400Regular,
} from '@expo-google-fonts/inter';
import { DMSans_400Regular, DMSans_700Bold } from '@expo-google-fonts/dm-sans';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AppNavigator from './src/navigation/index.navigation';

SplashScreen.preventAutoHideAsync();

export default function App() {
	const [fontsLoaded, fontError] = useFonts({
		Inter_200ExtraLight,
		Inter_400Regular,
		DMSans_400Regular,
		DMSans_700Bold,
		Averta: require('./assets/fonts/AvertaDemo-Regular.otf'),
	});

	const isDarkMode = useColorScheme() === 'dark';

	if (!fontsLoaded) {
		return null;
	}

	SplashScreen.hideAsync();

	const backgroundStyle = {
		flex: 1,
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	};

	return (
		<SafeAreaProvider
			style={backgroundStyle}
			initialMetrics={initialWindowMetrics}
		>
			<GestureHandlerRootView style={{ flex: 1 }}>
				<StatusBar
					style='auto'
					translucent
				/>
				<AppNavigator />
			</GestureHandlerRootView>
		</SafeAreaProvider>
	);
}