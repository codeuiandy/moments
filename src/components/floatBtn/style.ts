import {StyleSheet} from 'react-native';
import {HDP} from '@helpers';
import {palette} from '@components/theme';

const styles = StyleSheet.create({
  floatContainer: {
    position: 'absolute',
    bottom: HDP(25),
    right: HDP(0),
    backgroundColor: palette.orange,
    height: HDP(60),
    width: HDP(60),
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
