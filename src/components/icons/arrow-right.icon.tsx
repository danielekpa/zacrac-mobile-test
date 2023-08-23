import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ArrowRight = (props: SvgProps) => (
	<Svg
		xmlns='http://www.w3.org/2000/svg'
		width={20}
		height={20}
		fill='none'
		{...props}
	>
		<Path
			stroke='#ABA8BD'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.3}
			d='M7.5 3.333 14.166 10 7.5 16.667'
		/>
	</Svg>
);
export default ArrowRight;
