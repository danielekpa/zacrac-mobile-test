import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const PatreonIcon = (props: SvgProps) => (
	<Svg
		xmlns='http://www.w3.org/2000/svg'
		width={36}
		height={36}
		fill='none'
		{...props}
	>
		<Path
			fill='#F76754'
			d='M18 36c9.941 0 18-8.059 18-18S27.941 0 18 0 0 8.059 0 18s8.059 18 18 18Z'
		/>
		<Path
			fill='#002C49'
			d='M9.6 25.8h3V10.2h-3v15.6Z'
		/>
		<Path
			fill='#fff'
			d='M20.41 10.2c3.303 0 5.99 2.696 5.99 6.009a5.998 5.998 0 0 1-5.99 5.991c-3.314 0-6.01-2.688-6.01-5.991a6.016 6.016 0 0 1 6.01-6.009Z'
		/>
	</Svg>
);
export default PatreonIcon;
