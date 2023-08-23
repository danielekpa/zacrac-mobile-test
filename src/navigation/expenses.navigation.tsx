import { View } from 'react-native';
import React, { useCallback } from 'react';
import { ExpensesStackParamList } from '@app/types/navigation.types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MonthlyExpenses from '@app/screens/expenses/monthly-expenses.screen';
import { BG_COLOR, ICON_COLOR } from '@app/constants/colors';
import { Button } from '@app/components/reusable/button/button.component';
import BackButton from '@app/components/icons/backbutton.icon';
import Typography from '@app/components/reusable/typography/index.component';
import AddIcon from '@app/components/icons/add.icon';
import BillsUtilities from './bills.navigation';

export default function ExpensesNavigator() {
	const ExpensesStack = createNativeStackNavigator<ExpensesStackParamList>();

	const backButton = useCallback(
		(navigation: any, disabled: boolean = false) => (
			<Button
				onPress={() => !disabled && navigation.goBack()}
				hitSlop={{
					left: 30,
					right: 30,
					top: 30,
					bottom: 30,
				}}
			>
				<BackButton color={ICON_COLOR} />
			</Button>
		),
		[]
	);

	const rightButton = useCallback(
		(navigation: any) => (
			<Button
				// onPress={() => navigation.goBack()}
				hitSlop={{
					left: 30,
					right: 30,
					top: 30,
					bottom: 30,
				}}
			>
				<AddIcon color={ICON_COLOR} />
			</Button>
		),
		[]
	);

	const headerTitle = useCallback(
		(title: string) => (
			<View className='flex flex-row items-center'>
				<Typography
					weight='bold'
					spacing='wide'
					className='text-lg leading-7'
					font='dm-bold'
				>
					{title}
				</Typography>
			</View>
		),
		[]
	);

	return (
		<ExpensesStack.Navigator
			initialRouteName='MonthlyExpenses'
			screenOptions={{
				headerShown: true,
				animation: 'none',
			}}
		>
			<ExpensesStack.Screen
				name='MonthlyExpenses'
				component={MonthlyExpenses}
				options={({ navigation }) => ({
					headerTransparent: false,
					headerStyle: {
						backgroundColor: BG_COLOR,
					},
					headerShadowVisible: false,
					headerTitleAlign: 'center',
					headerTitle: () => headerTitle('Expenses'),
					headerLeft: () => backButton(navigation, true),
					headerRight: () => rightButton(navigation),
				})}
			/>
			<ExpensesStack.Screen
				name='Bills&Utilities'
				component={BillsUtilities}
				options={({ navigation }) => ({
					headerTransparent: false,
					headerStyle: {
						backgroundColor: BG_COLOR,
					},
					headerShadowVisible: false,
					headerTitleAlign: 'center',
					headerTitle: () => headerTitle('Bill'),
					headerLeft: () => backButton(navigation),
					headerRight: () => rightButton(navigation),
				})}
			/>
		</ExpensesStack.Navigator>
	);
}
