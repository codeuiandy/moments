import { Platform } from 'react-native';

/*
Available font weights

300 Light
400 Regular
500 Medium
600 SemiBold
700 Bold
*/

export const family = {
  SFProRoundedBold: Platform.select({
    ios: 'SFProRounded-Bold', // The font family name
    android: 'SFProRounded-Bold', // The file name
  }),
  SFProRoundedRegular: Platform.select({
    ios: 'SFProRounded-Regular', // The font family name
    android: 'SFProRounded-Regular', // The file name
  }),
  SFProRoundedSemiBold: Platform.select({
    ios: 'SFProRounded-Semibold', // The font family name
    android: 'SFProRounded-Semibold', // The file name
  }),
};
