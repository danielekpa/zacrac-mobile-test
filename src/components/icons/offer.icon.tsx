import { ICON_COLOR } from '@app/constants/colors';
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const OfferIcon = (props: SvgProps) => (
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
			d='M10.75 4.75v1.2m0 12.1v1.2m0-9.2v3.9M20 12.5a2.5 2.5 0 0 1 2.5-2.5V9c0-4-1-5-5-5h-10c-4 0-5 1-5 5v.5a2.5 2.5 0 0 1 0 5v.5c0 4 1 5 5 5h10c4 0 5-1 5-5a2.5 2.5 0 0 1-2.5-2.5Z'
		/>
	</Svg>
);

OfferIcon.defaultProps = {
	color: ICON_COLOR,
};

export default OfferIcon;
