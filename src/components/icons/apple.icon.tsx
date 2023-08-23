import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const AppleIcon = (props: SvgProps) => (
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
			fill='#0B0B0A'
			fillRule='evenodd'
			d='M21.95 7.2c.189 1.28-.332 2.534-1.02 3.421-.735.952-2.002 1.688-3.23 1.65-.224-1.226.35-2.489 1.048-3.338.766-.936 2.079-1.655 3.202-1.733Zm3.689 18.016c.633-.97.87-1.46 1.361-2.555-3.574-1.359-4.147-6.44-.61-8.39-1.079-1.354-2.595-2.138-4.026-2.138-1.031 0-1.738.269-2.38.514-.535.203-1.026.39-1.623.39-.645 0-1.216-.205-1.814-.419-.657-.236-1.347-.483-2.202-.483-1.606 0-3.316.982-4.4 2.66-1.523 2.362-1.264 6.804 1.207 10.589.883 1.354 2.063 2.875 3.607 2.889.64.006 1.066-.185 1.527-.392.528-.236 1.102-.494 2.095-.499.999-.006 1.564.255 2.084.495.45.207.866.4 1.501.392 1.545-.012 2.79-1.698 3.673-3.053Z'
			clipRule='evenodd'
		/>
	</Svg>
);
export default AppleIcon;
