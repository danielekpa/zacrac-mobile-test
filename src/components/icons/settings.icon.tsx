import { ICON_COLOR } from '@app/constants/colors';
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SettingsIcon = (props: SvgProps) => (
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
			d='M3.5 9.11v5.77c0 2.12 0 2.12 2 3.47l5.5 3.18c.83.48 2.18.48 3 0l5.5-3.18c2-1.35 2-1.35 2-3.46V9.11c0-2.11 0-2.11-2-3.46L14 2.47c-.82-.48-2.17-.48-3 0L5.5 5.65C3.5 7 3.5 7 3.5 9.11Z'
		/>
		<Path
			stroke={props.color}
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M12.5 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z'
		/>
	</Svg>
);

SettingsIcon.defaultProps = {
	color: ICON_COLOR,
};

export default SettingsIcon;
