import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { ProgressBar } from 'rn-multi-progress-bar';

import { Button } from '@app/components/reusable/button/button.component';
import Typography from '@app/components/reusable/typography/index.component';
import {
	ACTIVE_COLOR,
	ICON_COLOR,
	LIGHT_GRAY_COLOR,
	SECONDAYR_COLOR,
	WHITE_COLOR,
} from '@app/constants/colors';
import { ExpensesStackParamList } from '@app/types/navigation.types';
import { formatMoney } from '@app/utils/utils';
import DropDownIcon from '@app/components/icons/dropdown.icon';
import classNames from 'classnames';
import { expensesCategory } from '@app/data/expenses.data';
import MoreLoader from '@app/components/icons/more-loader.icon';
import { cardBorderStyle, cardStyle } from '@app/styles/container.style';

type ScreenProp = BottomTabScreenProps<
	ExpensesStackParamList,
	'MonthlyExpenses'
>;

export default function MonthlyExpenses({ navigation }: ScreenProp) {
	return (
		<View className='flex-1 bg-bgColor pt-5 px-6 pb-4'>
			<FlatList
				className='h-full w-full'
				showsVerticalScrollIndicator={false}
				keyExtractor={(item, index) => `${item.id + '-' + index}`}
				ListHeaderComponent={
					<>
						<View className='items-center'>
							<View className='flex-row mb-1 justify-center items-center'>
								<Typography
									className='font-normal text-[#171328]'
									font='averta'
								>
									September 2020
								</Typography>
								<DropDownIcon />
							</View>

							<Typography
								font='dm-bold'
								className='mt-1 text-5xl text-textColor'
							>
								{formatMoney().format(1812)}
							</Typography>
						</View>
						<View
							className={classNames('mt-7 px-6 pt-3.5 pb-7', cardBorderStyle)}
							style={cardStyle.card}
						>
							<View className='flex-row justify-between w-full mb-4'>
								<View>
									<Typography
										color='lightTextColor'
										weight='normal'
										className='text-lightTextColor'
										font='dm-reg'
									>
										Left to spend
									</Typography>
									<Typography
										weight='bold'
										className='text-lg'
										font='dm-bold'
									>
										{formatMoney().format(738)}
									</Typography>
								</View>

								<View>
									<Typography
										color='lightTextColor'
										weight='normal'
										className='text-lightTextColor'
										font='dm-reg'
									>
										Monthly budget
									</Typography>
									<Typography
										weight='bold'
										className='text-lg'
										font='dm-bold'
									>
										{formatMoney().format(2550)}
									</Typography>
								</View>
							</View>

							<ProgressBar
								{...progressBarProps}
								data={[
									{ progress: 320, color: SECONDAYR_COLOR },
									{ progress: 700, color: 'rgb(55, 106, 255)' },
									{ progress: 792, color: ACTIVE_COLOR },
									{ progress: 738, color: LIGHT_GRAY_COLOR },
								]}
							/>
						</View>
					</>
				}
				data={expensesCategory}
				renderItem={({
					item: { id, expenses, title: catTitle, totalBudget, ...expenseCat },
				}) => (
					<TouchableOpacity
						activeOpacity={0.9}
						onPress={() => navigation.navigate('Bills&Utilities')}
						key={id}
						className={classNames('mt-5 px-5 pt-5 pb-6', cardBorderStyle)}
						style={cardStyle.card}
					>
						<View className='justify-between w-full '>
							<View className='flex-row items-center justify-between mb-5'>
								<View className='flex-row items-center gap-x-4'>
									<expenseCat.icon />

									<Typography
										weight='bold'
										className='text-lg'
										font='dm-reg'
									>
										{catTitle}
									</Typography>
								</View>

								<Typography
									size='base'
									color='secondaryTextColor'
									weight='normal'
									className='text-secondaryTextColor'
									font='dm-reg'
								>
									{formatMoney().format(totalBudget)}
								</Typography>
							</View>

							{expenses.map(({ title, spent, budget }, index) => (
								<View
									key={index}
									className={classNames(
										'flex-row justify-between gap-x-[26px]',
										{ 'mt-[27px]': !!index }
									)}
								>
									<View className='flex-auto'>
										<Typography
											font='dm-bold'
											size='base'
											className='leading-7 mb-2.5'
										>
											{title}
										</Typography>

										<ProgressBar
											{...progressBarProps}
											barHeight={4}
											data={[
												{
													progress: spent,
													color: id === 1 ? ACTIVE_COLOR : SECONDAYR_COLOR,
												},
												{
													progress: budget - spent,
													color: LIGHT_GRAY_COLOR,
												},
											]}
										/>
									</View>

									<View className=' text-right'>
										<Typography
											font='dm-bold'
											size='base'
											className='leading-7 text-right'
										>
											{formatMoney().format(budget)}
										</Typography>

										<Typography
											color='secondaryTextColor'
											font='dm-reg'
											size='sm'
											className='leading-4 text-secondaryTextColor'
										>
											{`Left ${formatMoney().format(budget - spent)}`}
										</Typography>
									</View>
								</View>
							))}
						</View>
					</TouchableOpacity>
				)}
				ListFooterComponent={
					<View className='items-center'>
						<MoreLoader />
					</View>
				}
			/>
		</View>
	);
}

const progressBarProps = {
	shouldAnimate: true, // to enable animation, default false
	animateDuration: 1000, // if animation enabled
	useNativeDriver: true,
	barHeight: 8,
};
