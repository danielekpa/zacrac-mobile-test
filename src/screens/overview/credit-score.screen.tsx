import { View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CurvedIcon from '@app/components/icons/curved-line.icon';
import Typography from '@app/components/reusable/typography/index.component';
import { cardBorderStyle, cardStyle } from '@app/styles/container.style';
import classNames from 'classnames';
import { creditStat } from '@app/data/expenses.data';

export default function CreditScore() {
	return (
		<SafeAreaView className='flex-1 bg-bgColor'>
			<View className='relative px-[10%] flex pt-8 pb-3 mb-7'>
				<View className='absolute top-0 right-[20%]'>
					<CurvedIcon />
				</View>

				<View className='items-center align-middle'>
					<Typography
						className='lightTextColor'
						color='lightTextColor'
					>
						Good
					</Typography>
					<Typography
						className='text-5xl leading-[58px] align-middle'
						font='dm-bold'
					>
						660
					</Typography>
					<Typography
						color='actionBtnColor'
						className='text-actionBtnColor'
					>
						+6pts
					</Typography>
				</View>

				<View className='flex-row justify-around w-full mt-6 text-lightTextColor'>
					<Typography color='lightTextColor'>400</Typography>
					<Typography color='lightTextColor'>
						Last update on 20 Jul 2020
					</Typography>
					<Typography color='lightTextColor'>850</Typography>
				</View>
			</View>

			<View
				className={classNames(
					'bg-black py-3.5 px-5 gap-y-2 mx-[6.4%]',
					cardBorderStyle
				)}
				style={cardStyle.card}
			>
				{creditStat.map((stat, index, arr) => (
					<View
						className={classNames(
							'flex-row items-center justify-between w-full pt-1 pb-4',
							{ 'border-b border-b-[#EAE9F0]': index < arr.length - 1 }
						)}
						key={stat.id}
					>
						<View className='flex-row items-center justify-between w-full gap-x-2'>
							<View className=''>
								<Typography
									color='[#433E5B]'
									font='dm-bold'
									size='base'
									className='leading-7'
								>
									{stat.title}
								</Typography>
								<Typography
									font='dm-reg'
									size='base'
									className={classNames(
										'mt-1',
										{ 'text-greenColor': stat.remark.toLowerCase() === 'good' },
										{
											'text-[#F88736]': stat.remark.toLowerCase() !== 'good',
										}
									)}
								>
									{stat.remark}
								</Typography>
							</View>

							<View>
								<Typography
									size='base'
									font='dm-bold'
									className='leading-7 text-right'
								>
									{stat.mark}
								</Typography>
								<Typography
									color='lightTextColor'
									size='base'
									font='dm-reg'
									className={classNames(
										'mt-1 leading-7',
										{
											'text-lightTextColor':
												stat.remark.toLowerCase() === 'good',
										},
										{
											'text-[#F88736]': stat.remark.toLowerCase() !== 'good',
										}
									)}
								>
									{stat.action}
								</Typography>
							</View>
						</View>
					</View>
				))}
			</View>
		</SafeAreaView>
	);
}
