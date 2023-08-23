import Typography from '@app/components/reusable/typography/index.component';
import { ACTIVE_COLOR, ICON_COLOR } from '@app/constants/colors';
import Subscriptions from '@app/screens/expenses/subscription.screen';
import { BillsStackParamList } from '@app/types/navigation.types';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from 'react-native';

const { Navigator, Screen } =
	createMaterialTopTabNavigator<BillsStackParamList>();

function BillsUtilities() {
	return (
    <Navigator
      initialRouteName='Subscription'
			screenOptions={({ route }) => {
				return {
					tabBarLabel: ({ focused }: { focused: boolean }) => (
						<Typography
							style={{
								color: focused ? '#3F27B4' : ICON_COLOR,
								textAlign: 'right',
							}}
							weight='semibold'
							font='averta'
							size='md'
						>
							{route.name}
						</Typography>
					),
					tabBarIndicatorContainerStyle: {
						justifyContent: 'center',
						width: '100%',
						marginHorizontal: '5%',
						paddingHorizontal: '10%',
					},
					tabBarIndicatorStyle: {
						width: '33%',
						backgroundColor: ACTIVE_COLOR,
					},
					tabBarContentContainerStyle: {
						paddingHorizontal: 0,
						justifyContent: 'space-around',
						marginTop: 12,
					},
					tabBarStyle: {},
					tabBarItemStyle: {
						justifyContent: 'center',
					},
				};
			}}
			// tabBar={(props) => <CustomBar {...props} />}
		>
			<Screen
				name='Bills'
				component={Bills}
			/>
			<Screen
				name='Payments'
				component={Payments}
			/>
			<Screen
				name='Subscription'
				component={Subscriptions}
			/>
		</Navigator>
	);
}

const Bills = () => (
	<SafeAreaView className='flex-1'>
		<Typography>Bills</Typography>
	</SafeAreaView>
);

const Payments = () => (
	<SafeAreaView className='flex-1'>
		<Typography>SubScription</Typography>
	</SafeAreaView>
);

export default BillsUtilities;
