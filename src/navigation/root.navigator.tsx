import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '@app/types/navigation.types';
import AuthOptions from '@app/screens/auth/auth-options.screen';
import MainAppNav from './main.navigation';

export default function RootNavigator() {
	const RootStack = createNativeStackNavigator<RootStackParamList>();

	const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

	return (
		<RootStack.Navigator
			initialRouteName={isSignedIn ? 'MainApp' : 'AuthOptions'}
			screenOptions={{
				headerShown: false,
			}}
		>
			<RootStack.Screen
				name='AuthOptions'
				component={AuthOptions}
			/>

			<RootStack.Screen
				name='MainApp'
				component={MainAppNav}
			/>
		</RootStack.Navigator>
	);
}
