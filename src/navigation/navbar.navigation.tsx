import React, { useCallback } from 'react';
import { Platform, TextStyle as RNTextStyle, SafeAreaView } from 'react-native';
import {
	BottomTabNavigationOptions,
	createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { DashboardBottomTabParamList } from '@app/types/navigation.types';
import {
	ACTIVE_COLOR,
	ICON_COLOR,
	BG_COLOR,
	INACTIVE_COLOR,
} from '@app/constants/colors';

import SettingsIcon from '@app/components/icons/settings.icon';
import OfferIcon from '@app/components/icons/offer.icon';
import OverviewIcon from '@app/components/icons/overview.icon';
import CalendarIcon from '@app/components/icons/calendar.icon';
import Typography from '@app/components/reusable/typography/index.component';
import { RouteProp } from '@react-navigation/native';
import ExpensesNavigator from './expenses.navigation';
import CreditScore from '@app/screens/overview/credit-score.screen';

const Tab = createBottomTabNavigator<DashboardBottomTabParamList>();

const TextStyle: RNTextStyle = {
	fontStyle: 'normal',
	fontWeight: '300',
	fontSize: 12,
	lineHeight: 25,
};

const TAB_ICON: { [key: string]: React.Element } = {
	Overview: OverviewIcon,
	'This Month': CalendarIcon,
	Offers: OfferIcon,
	Settings: SettingsIcon,
};

const createScreenOptions: BottomTabNavigationOptions = ({
	route,
}: {
	route: RouteProp<
		DashboardBottomTabParamList,
		keyof DashboardBottomTabParamList
	>;
	navigation: any;
}) => {
	const TabIcon = TAB_ICON[route?.name];

	return {
		title: route.name,
		tabBarIcon: (props: { focused: boolean }) => (
			<TabIcon color={props.focused ? ACTIVE_COLOR : ICON_COLOR} />
		),
		tabBarIconStyle: {
			marginTop: 7,
		},
		tabBarLabel: ({ focused }: { focused: boolean }) => (
			<Typography
				size='sm'
				style={{
					color: focused ? ACTIVE_COLOR : INACTIVE_COLOR,
					fontFamily: focused ? 'DMSans_700Bold' : 'DMSans_400Regular',
				}}
			>
				{route.name}
			</Typography>
		),
		tabBarLabelStyle: { marginTop: 6 },
		tabBarStyle: {
			paddingTop: 8,
			paddingHorizontal: 14,
			justifyContent: 'space-between',
			alignItems: 'center',
			width: '100%',
			marginBottom: 0,
			// paddingBottom: 0,
			paddingBottom: 20,
		},
		tabBarLabelPosition: 'below-icon',
		tabBarActiveTintColor: ACTIVE_COLOR,
		tabBarInactiveTintColor: ICON_COLOR,
		headerShown: false,
		tabBarHideOnKeyboard: Platform.OS !== 'ios',
	};
};

function DashboardNavigator() {
	return (
		<Tab.Navigator
			initialRouteName='This Month'
			sceneContainerStyle={{
				backgroundColor: BG_COLOR,
			}}
			screenOptions={createScreenOptions}
			backBehavior='none'
		>
			<Tab.Screen
				name='Overview'
				component={CreditScore}
				options={{
					headerShown: true,
					headerShadowVisible: false,
					headerTitle: 'Credit Score',
					headerStyle: {
						backgroundColor: BG_COLOR,
					},
				}}
			/>
			<Tab.Screen
				name='This Month'
				component={ExpensesNavigator}
			/>

			<Tab.Screen
				name='Offers'
				component={Offers}
			/>
			<Tab.Screen
				name='Settings'
				component={Settings}
			/>
		</Tab.Navigator>
	);
}

const OverView = () => (
	<SafeAreaView className='flex-1'>
		<Typography>Overview</Typography>
	</SafeAreaView>
);

const Offers = () => (
	<SafeAreaView className='flex-1'>
		<Typography>Offers</Typography>
	</SafeAreaView>
);

const Settings = () => (
	<SafeAreaView className='flex-1'>
		<Typography>Settings</Typography>
	</SafeAreaView>
);

export default DashboardNavigator;
