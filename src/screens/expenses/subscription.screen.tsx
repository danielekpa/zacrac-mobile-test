import { View } from 'react-native';
import React from 'react';
import Typography from '@app/components/reusable/typography/index.component';
import { formatMoney } from '@app/utils/utils';
import classNames from 'classnames';
import { cardBorderStyle, cardStyle } from '@app/styles/container.style';
import { subscriptions } from '@app/data/expenses.data';
import ArrowRight from '@app/components/icons/arrow-right.icon';

export default function Subscriptions() {
	return (
		<View className='flex-1 bg-bgColor pt-7 px-6'>
			<View className='w-1/2 items-center self-center gap-y-3 mb-10'>
				<Typography
					className='text-center px-2'
					font='dm-reg'
				>
					Your monthly payment for subcriptions
				</Typography>

				<Typography
					className='text-center text-5xl leading-[58px]'
					font='dm-bold'
				>
					{formatMoney(2).format(61.88)}
				</Typography>
			</View>

			<View
				className={classNames('bg-black pt-1.5 pb-3.5 px-5 gap-y-2', cardBorderStyle)}
				style={cardStyle.card}
			>
				{subscriptions.map((sub) => (
					<View className='flex-row items-center justify-between w-full' key={sub.id}>
						<View className='flex-row items-center gap-x-2'>
							<sub.icon />

							<View className='p-2.5'>
								<Typography
									color='[#433E5B]'
									font='dm-reg'
								>
									{sub.name}
								</Typography>
								<Typography
									size='base'
									font='dm-bold'
									className='leading-7'
								>{`${formatMoney(2).format(sub.amount)}/${
									sub.type
								}`}</Typography>
							</View>
						</View>

						<ArrowRight />
					</View>
				))}
			</View>
		</View>
	);
}
