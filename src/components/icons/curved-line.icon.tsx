import * as React from 'react';
import Svg, {
	SvgProps,
	Path,
	Defs,
	RadialGradient,
	Stop,
} from 'react-native-svg';

const CurvedIcon = (props: SvgProps) => (
	<Svg
		xmlns='http://www.w3.org/2000/svg'
		width={276}
		height={141}
		fill='none'
		{...props}
	>
		<Path
			fill='url(#a)'
			fillRule='evenodd'
			d='M95.813 12.743c1.554-.517 2.435-2.175 1.95-3.74-.485-1.561-2.145-2.438-3.696-1.92A137.654 137.654 0 0 0 0 137.91c.003 1.561 1.3 2.798 2.86 2.763 1.563-.035 2.797-1.33 2.794-2.892v-.282c0-58.057 37.765-107.326 90.159-124.757Z'
			clipRule='evenodd'
		/>
		<Path
			fill='#EAE9F0'
			fillRule='evenodd'
			d='M272.442 140.81c-1.561-.036-2.794-1.333-2.79-2.895l.001-.415c0-25.939-7.539-50.123-20.552-70.498-.849-1.33-.498-3.102.816-3.975 1.31-.871 3.081-.517 3.925.812a137.657 137.657 0 0 1 21.464 74.211c-.005 1.561-1.303 2.797-2.864 2.76ZM188.365 12.86c-.614 1.512.117 3.232 1.615 3.877 21.783 9.38 40.526 24.437 54.351 43.3.932 1.272 2.709 1.59 4.005.69 1.299-.902 1.622-2.689.693-3.968a137.658 137.658 0 0 0-56.832-45.492c-1.496-.645-3.218.084-3.832 1.594Z'
			clipRule='evenodd'
		/>
		<Path
			fill='url(#b)'
			fillRule='evenodd'
			d='M218.879 33.837c1.27.989 3.103.806 4.122-.439 1.021-1.247.84-3.089-.429-4.083a137.649 137.649 0 0 0-30.451-18.08c-1.497-.645-3.219.085-3.831 1.595-.613 1.512.118 3.231 1.617 3.876a132.004 132.004 0 0 1 28.972 17.131Z'
			clipRule='evenodd'
		/>
		<Path
			fill='url(#c)'
			fillRule='evenodd'
			d='M184.996 11.553c.574-1.53-.2-3.239-1.742-3.78a137.652 137.652 0 0 0-79.393-3.56c-1.591.402-2.519 2.042-2.082 3.624.437 1.58 2.069 2.505 3.659 2.107A132.755 132.755 0 0 1 137.653 6c15.251 0 29.898 2.577 43.526 7.317 1.542.536 3.243-.236 3.817-1.764Z'
			clipRule='evenodd'
		/>
		<Defs>
			<RadialGradient
				id='a'
				cx={0}
				cy={0}
				r={1}
				gradientTransform='rotate(130.601 43.583 83.046) scale(115.244 116.52)'
				gradientUnits='userSpaceOnUse'
			>
				<Stop
					offset={0.063}
					stopColor='#856FE5'
				/>
				<Stop
					offset={0.552}
					stopColor='#3F27B4'
				/>
			</RadialGradient>
			<RadialGradient
				id='b'
				cx={0}
				cy={0}
				r={1}
				gradientTransform='matrix(-50.99992 100.50024 -106.65867 -54.12508 136.5 96)'
				gradientUnits='userSpaceOnUse'
			>
				<Stop
					offset={0.063}
					stopColor='#856FE5'
				/>
				<Stop
					offset={0.552}
					stopColor='#3F27B4'
				/>
			</RadialGradient>
			<RadialGradient
				id='c'
				cx={0}
				cy={0}
				r={1}
				gradientTransform='rotate(118.435 43.856 97.802) scale(104.017 108.571)'
				gradientUnits='userSpaceOnUse'
			>
				<Stop
					offset={0.063}
					stopColor='#856FE5'
				/>
				<Stop
					offset={0.552}
					stopColor='#3F27B4'
				/>
			</RadialGradient>
		</Defs>
	</Svg>
);
export default CurvedIcon;
