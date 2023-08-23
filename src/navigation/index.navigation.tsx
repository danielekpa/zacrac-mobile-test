import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, View } from 'react-native';
import RootNavigator from './root.navigator';
import { BG_COLOR } from '@app/constants/colors';

export default function AppNavigator() {
	return (
		<>
			<NavigationContainer>
				<RootNavigator />
			</NavigationContainer>
		</>
	);
}
