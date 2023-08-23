import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const NetflixIcon = (props: SvgProps) => (
	<Svg
		xmlns='http://www.w3.org/2000/svg'
		width={36}
		height={36}
		fill='none'
		{...props}
	>
		<Path
			fill='#fff'
			d='M0 18C0 8.059 8.059 0 18 0s18 8.059 18 18-8.059 18-18 18S0 27.941 0 18Z'
		/>
		<Path
			fill='#E50A13'
			d='M15.864 28.372V16.461l4.029 11.43c1.238-.14 2.478-.27 3.722-.394V7.2h-3.266v12.336L16.005 7.2H12.6v21.6h.022c1.08-.149 2.16-.292 3.242-.428Z'
		/>
	</Svg>
);
export default NetflixIcon;
