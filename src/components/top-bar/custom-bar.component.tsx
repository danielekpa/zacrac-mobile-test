import { View, Text } from 'react-native';
import React from 'react';
import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';

export default function CustomBar(props: MaterialTopTabBarProps) {
	console.log({ ...props });

	return (
		<View>
			<Text>CustomBar</Text>
		</View>
	);
}
