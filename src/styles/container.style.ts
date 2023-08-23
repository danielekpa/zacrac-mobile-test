import { StyleSheet } from 'react-native';
import { WHITE_COLOR } from '../constants/colors';

const container = {
  flex: 1,
  position: 'relative',
  backgroundColor: WHITE_COLOR,
};

const paddingNone = {
  padding: 0,
};

const paddingVerySmall = {
  paddingHorizontal: '3.5%',
};

const paddingSmall = {
  paddingHorizontal: '5.3%',
};

const paddingNormal = {
  paddingHorizontal: '6.4%',
  // padding: 12,
};

const paddingMedium = {
  paddingHorizontal: '7.5%', // 28/375
  // padding: 16,
};

const paddingLarge = {
  paddingHorizontal: '9.8%', // 37/375
  // padding: 16,
};

// const paddingLarge = {
//   padding: 24,
// };

const containerCenter = {
  alignItems: 'center',
  justifyContent: 'center',
};

const containerEndToEnd = {
  flexDirection: 'column',
  justifyContent: 'space-between',
};

export const cardStyle = StyleSheet.create({
  card: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.06,
    shadowRadius: 5.5,
    elevation: 2,
  }
});

export const cardBorderStyle: string =
  'border-[#EAE9F0] border bg-bgColor items-center rounded-[18px]';

const containerStyles: { [key: string]: Object | { [key: string]: string } } = {
  container,
  paddingNone,
  paddingVerySmall,
  paddingSmall,
  paddingNormal,
  paddingMedium,
  paddingLarge,
  containerCenter,
  containerEndToEnd,
};

export default containerStyles;
