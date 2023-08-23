import React, { useCallback } from 'react';
import { StyleProp, Text, TextProps, TextStyle } from 'react-native';
import classNames from 'classnames';
import { formStyle, typographyStyle } from '@app/styles/index.style';
import { capitalize } from '@app/utils/utils';

type Props = {
	align?: string;
	children: React.ReactNode;
	className?: string;
	color?: string;
	font?: 'dm-bold' | 'dm-reg' | 'inter-xlite' | 'inter-reg' | 'averta';
	lineHeight?: string;
	spacing?: string;
	weight?: string;
	size?: number | string;
	gutterBottom?: number;
	style?: StyleProp<TextStyle>;
	others?: TextProps;
};

const fonts: { [key: string]: string } = {
	'dm-bold': 'DMSans_700Bold',
	'dm-reg': 'DMSans_400Regular',
	'inter-xlite': 'Inter_200ExtraLight',
	'inter-reg': 'Inter_400Regular',
	averta: 'Averta',
};

function Typography({
	align,
	children,
	className,
	color = 'textColor',
	lineHeight,
	weight = 'medium',
	size = 'md',
	gutterBottom,
	font = 'dm-reg',
	spacing,
	style,
	...others
}: Props) {
	const fontSize = typographyStyle[`font${capitalize(String(size))}`];

	const getFontFamily = useCallback((family: string) => fonts[family], []);

	return (
		<Text
			className={classNames(
				`${typographyStyle[weight]} text-${color} leading-${lineHeight} tracking-${spacing} text-${align}`
			)}
			style={[
				{
					fontSize: Number(fontSize),
					marginBottom: gutterBottom,
					fontFamily: getFontFamily(font),
				},
				style,
			]}
			{...others}
		>
			{children}
		</Text>
	);
}

Typography.defaultProps = {
	spacing: 'normal',
	color: 'textColor',
	font: 'dm-reg',
	lineHeight: '5',
	weight: 'medium',
	size: 'md',
	gutterBottom: 0,
	className: '',
	style: {},
	others: null,
	align: 'left',
};

export function LabelText(label: string) {
	return (
		<Typography
			color='black'
			size='md'
			weight='bold'
			spacing='wide'
			className={formStyle.labelStyle}
		>
			{label}
		</Typography>
	);
}

export default Typography;
