import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const AddIcon = (props: SvgProps) => (
	<Svg
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		fill='none'
		{...props}
	>
		<Path
			stroke='#131117'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M4 12h16m-8 8V4'
		/>
	</Svg>
);
export default AddIcon;
