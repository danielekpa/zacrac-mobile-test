/* eslint-disable @typescript-eslint/no-use-before-define */
import {
	TouchableOpacityProps,
	TouchableOpacity,
	ViewStyle,
	StyleProp,
	TouchableWithoutFeedbackProps,
} from 'react-native';
import React from 'react';

type ButtonProps = TouchableWithoutFeedbackProps &
	TouchableOpacityProps & {
		activeOpacity?: number;
		disabled?: boolean;
		onPress?: () => void;
		children?: JSX.Element | React.ReactNode;
		style?: StyleProp<ViewStyle>;
	};

function Button({
	activeOpacity,
	children,
	disabled,
	style,
	onPress,
	...otherProps
}: ButtonProps) {
	return (
		<TouchableOpacity
			disabled={disabled}
			activeOpacity={activeOpacity}
			style={style}
			onPress={onPress}
			{...otherProps}
		>
			{children}
		</TouchableOpacity>
	);
}

Button.defaultProps = {
	activeOpacity: 0.8,
	disabled: false,
	onPress: () => null,
	children: null,
	style: {},
	textStyle: {},
};

export { Button };
