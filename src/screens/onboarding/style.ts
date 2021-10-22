import {HDP, HP, WP} from '@helpers';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flex: 1,
    height: HP(100),
    width: `100%`,
  },
  onBoardCol1: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    width: `100%`,
  },

  onBoardCol2: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
    // paddingBottom: 30,
  },
});

export default styles;
