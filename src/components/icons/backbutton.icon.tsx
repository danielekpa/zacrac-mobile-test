import { ICON_COLOR } from '@app/constants/colors';
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const BackButton = (props: SvgProps) => (
	<Svg
		xmlns='http://www.w3.org/2000/svg'
		width={24}
    height={24}
		fill='none'
		{...props}
	>
		<Path
			stroke={props.color}
			strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16 4-8 8 8 8"
		/>
	</Svg>
);

BackButton.defaultProps = {
	color: ICON_COLOR,
};

export default BackButton;
