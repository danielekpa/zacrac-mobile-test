import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SpotifyIcon = (props: SvgProps) => (
	<Svg
		xmlns='http://www.w3.org/2000/svg'
		width={36}
		height={36}
		fill='none'
		{...props}
	>
		<Path
			fill='#1ED760'
			d='M18 0C8.059 0 0 8.059 0 18c0 9.942 8.059 18 18 18s18-8.058 18-18c0-9.941-8.059-18-18-18Z'
		/>
		<Path
			fill='#fff'
			d='M25.86 25.57a1.104 1.104 0 0 1-1.52.369c-4.163-2.545-9.403-3.12-15.574-1.71a1.104 1.104 0 1 1-.492-2.154c6.753-1.543 12.546-.88 17.219 1.976.52.319.685 1 .366 1.52ZM28.029 20.743a1.383 1.383 0 0 1-1.902.456c-4.764-2.929-12.03-3.777-17.666-2.066a1.384 1.384 0 0 1-1.725-.921c-.22-.731.192-1.502.922-1.724 6.44-1.954 14.444-1.008 19.916 2.355.65.4.854 1.251.455 1.9ZM28.216 15.717c-5.715-3.394-15.141-3.706-20.597-2.05a1.658 1.658 0 1 1-.962-3.174c6.262-1.9 16.672-1.534 23.251 2.372a1.658 1.658 0 0 1-1.692 2.852Z'
		/>
	</Svg>
);
export default SpotifyIcon;
