import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const DropDownIcon = (props: SvgProps) => (
	<Svg
		xmlns='http://www.w3.org/2000/svg'
		width={12}
		height={12}
		fill='none'
		{...props}
	>
		<Path
			fill='#2C2646'
			d='M8.96 4.09H3.04c-.48 0-.72.58-.38.92L5.25 7.6c.415.415 1.09.415 1.505 0l.985-.985L9.345 5.01a.541.541 0 0 0-.385-.92Z'
		/>
	</Svg>
);
export default DropDownIcon;
