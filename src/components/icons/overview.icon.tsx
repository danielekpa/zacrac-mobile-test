import { ICON_COLOR } from '@app/constants/colors';
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const OverviewIcon = (props: SvgProps) => (
	<Svg
		xmlns='http://www.w3.org/2000/svg'
		width={25}
		height={24}
		fill='none'
		{...props}
	>
		<Path
			stroke={props.color}
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M9.5 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7Z'
		/>
		<Path
			stroke={props.color}
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M16 18.5c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2s-2 .9-2 2v9a2 2 0 0 0 2 2ZM9 18.5c1.1 0 2-.9 2-2V13c0-1.1-.9-2-2-2s-2 .9-2 2v3.5a2 2 0 0 0 2 2Z'
		/>
	</Svg>
);

OverviewIcon.defaultProps = {
	color: ICON_COLOR,
};

export default OverviewIcon;
