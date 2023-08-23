import { View, Text, SafeAreaView, ImageBackground } from 'react-native';
import React from 'react';
import Typography from '@app/components/reusable/typography/index.component';
import { Button } from '@app/components/reusable/button/button.component';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@app/types/navigation.types';

type ScreenProps = NativeStackScreenProps<RootStackParamList>;

export default function AuthOptions({ navigation }: ScreenProps) {
	return (
		<ImageBackground
			source={require('../../../assets/splash.png')}
			resizeMethod='resize'
			resizeMode='cover'
			className='flex-1'
		>
			<SafeAreaView className='flex-1 justify-end'>
				<View className='flex-[0.4]'>
					<Typography
						size='xl'
						color='white'
						className='text-center mx-20 text-white'
						style={{ fontFamily: 'Inter_200ExtraLight' }}
					>
						Be happy with you finance
					</Typography>

					<View className='items-center mt-12 w-full px-8'>
						<Button className='w-full bg-actionBtnColor py-4 items-center rounded-[10px]' onPress={() => navigation.navigate('MainApp')}>
							<Typography
								size='base'
								color='white'
							>
								Sign up
							</Typography>
						</Button>
						<Button className='mt-2.5 border border-white w-full py-4 items-center rounded-[10px]'>
							<Typography
								size='base'
								color='white'
							>
								Log in
							</Typography>
						</Button>
					</View>
				</View>
			</SafeAreaView>
		</ImageBackground>
	);
}
