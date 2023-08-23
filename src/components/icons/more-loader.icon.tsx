import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const MoreLoader = (props: SvgProps) => (
	<Svg
		xmlns='http://www.w3.org/2000/svg'
		width={41}
		height={41}
		fill='none'
		{...props}
	>
		<Path
			stroke='#131117'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={4.271}
			d='M32.443 20.5h.03m-11.988 0h.03m-11.989 0h.031'
		/>
	</Svg>
);
export default MoreLoader;
