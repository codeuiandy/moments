import { StyleSheet } from 'react-native';
import { color, family, palette } from '@components/theme';
import { HDP, RF } from '@helpers';

const styles = StyleSheet.create({
  container: { borderWidth: 1, backgroundColor: 'red' },
  inputContainer: {
    borderWidth: 1,
    borderColor: color.palette.inputBorder,
    borderRadius: HDP(5),
    flexDirection: 'row',
    margin: 0,
    // marginTop:-9
  },
 
  inputDefaultCss:{
      flex: 1,
      paddingTop:HDP(15),
      paddingLeft:HDP(10),
      paddingBottom:HDP(15),
      paddingRight:HDP(15)
      
  },
  labelDefault:{
      paddingBottom: 5,
      fontSize: RF(10.5),
      fontFamily: family.SFProRoundedRegular,
      lineHeight:20,
      color: palette.placeholderColor,
  }
});

export default styles;
