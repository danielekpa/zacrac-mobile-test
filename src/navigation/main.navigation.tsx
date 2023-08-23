import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainAppStackParamList } from '@app/types/navigation.types';
import DashboardNavigator from './navbar.navigation';

export default function MainAppNav() {
	const MainAppStack = createNativeStackNavigator<MainAppStackParamList>();

	return (
		<MainAppStack.Navigator
			initialRouteName='MainNav'
			screenOptions={{
				headerShown: false,
			}}
		>
			<MainAppStack.Screen
				name='MainNav'
				component={DashboardNavigator}
				options={{
					headerBackTitleVisible: false,
					headerBackVisible: false,
					headerShadowVisible: false,
				}}
			/>
		</MainAppStack.Navigator>
	);
}
