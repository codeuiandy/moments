import React, {FC} from 'react';
import {View, Text, TouchableOpacity, Button as Buttons} from 'react-native';
import styles from './style';
import style from './style';
import {palette} from '../theme/palette';
import {HDP, RF, WP} from '../../helpers/index';
import {family} from '@components/theme';

interface Props {
  ButtonStyle?: any;
  value: string;
  Onclick: Function;
  color?: string;
  width?: number;
  height?: number;
  paddingTop?: any;
  paddingBottom?: any;
  paddingLeft?: any;
  paddingRight?: any;
  borderColor?: any;
  borderWidth?: any;
  background?: any;
  borderRadius?: any;
  marginTop?: any;
  marginBottom?: any;
  fontSize?: any;
  fontFamily?: any;
}
export const Button: FC<Props> = ({
  ButtonStyle,
  value,
  Onclick,
  color,
  width,
  height,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  borderColor,
  borderWidth,
  background,
  borderRadius,
  marginTop,
  marginBottom,
  fontSize,
  fontFamily,
}) => {
  return (
    <TouchableOpacity onPress={Onclick}>
      <View
        style={{
          paddingTop: paddingTop ? HDP(paddingTop) : HDP(10),
          paddingBottom: paddingBottom ? HDP(paddingBottom) : HDP(10),
          paddingLeft: paddingLeft ? HDP(paddingLeft) : HDP(10),
          paddingRight: paddingRight ? HDP(paddingRight) : HDP(10),
          borderColor: borderColor ? borderColor : '',
          borderWidth: borderWidth ? borderWidth : 0,
          width: width ? width : `100%`,
          backgroundColor: background ? background : palette.purple,
          borderRadius: borderRadius ? borderRadius : 10,
          marginTop: marginTop ? HDP(marginTop) : 0,
          marginBottom: marginBottom ? HDP(marginBottom) : 0,
        }}>
        <Text
          style={{
            fontFamily: family.SFProRoundedRegular,
            color: color ? color : palette.white,
            fontSize: fontSize ? fontSize : RF(12),
            textAlign: 'center',
          }}>
          {value}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
