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
  Onclick?: Function;
  color?: any;
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
  textAlign?: any;
}
export const P: FC<Props> = ({
  value,
  Onclick,
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
  textAlign,
  color,
}) => {
  return (
    <TouchableOpacity>
      <Text
        style={{
          paddingTop: paddingTop ? HDP(paddingTop) : 0,
          paddingBottom: paddingBottom ? HDP(paddingBottom) : 0,
          paddingLeft: paddingLeft ? HDP(paddingLeft) : 0,
          paddingRight: paddingRight ? HDP(paddingRight) : 0,
          //   borderColor: borderColor ? borderColor : '',
          borderWidth: borderWidth ? borderWidth : 0,
          //   backgroundColor: background ? background : '',
          borderRadius: borderRadius ? borderRadius : 10,
          marginTop: marginTop ? HDP(marginTop) : 0,
          marginBottom: marginBottom ? HDP(marginBottom) : 0,
          fontFamily: family.SFProRoundedRegular,
          fontSize: fontSize ? fontSize : RF(10),
          textAlign: textAlign ? textAlign : 'left',
          color: color ? color : palette.black,
        }}>
        {value}
      </Text>
    </TouchableOpacity>
  );
};

interface Props {
  ButtonStyle?: any;
  value: string;
  Onclick?: Function;
  color: any;
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
  textAlign?: any;
}
export const H1: FC<Props> = ({
  value,
  Onclick,
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
  textAlign,
  color,
}) => {
  return (
    <TouchableOpacity>
      <Text
        style={{
          paddingTop: paddingTop ? HDP(paddingTop) : 0,
          paddingBottom: paddingBottom ? HDP(paddingBottom) : 0,
          paddingLeft: paddingLeft ? HDP(paddingLeft) : 0,
          paddingRight: paddingRight ? HDP(paddingRight) : 0,
          //   borderColor: borderColor ? borderColor : '',
          borderWidth: borderWidth ? borderWidth : 0,
          //   backgroundColor: background ? background : '',
          borderRadius: borderRadius ? borderRadius : 10,
          marginTop: marginTop ? HDP(marginTop) : 0,
          marginBottom: marginBottom ? HDP(marginBottom) : 0,
          fontFamily: family.SFProRoundedSemiBold,
          fontSize: fontSize ? fontSize : RF(17),
          textAlign: textAlign ? textAlign : 'left',
          color: color ? color : palette.black,
        }}>
        {value}
      </Text>
    </TouchableOpacity>
  );
};

interface Props {
  ButtonStyle?: any;
  value: string;
  Onclick?: Function;
  color: any;
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
  textAlign?: any;
}

export const H2: FC<Props> = ({
  value,
  Onclick,
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
  textAlign,
  color,
}) => {
  return (
    <TouchableOpacity>
      <Text
        style={{
          paddingTop: paddingTop ? HDP(paddingTop) : 0,
          paddingBottom: paddingBottom ? HDP(paddingBottom) : 0,
          paddingLeft: paddingLeft ? HDP(paddingLeft) : 0,
          paddingRight: paddingRight ? HDP(paddingRight) : 0,
          //   borderColor: borderColor ? borderColor : '',
          borderWidth: borderWidth ? borderWidth : 0,
          //   backgroundColor: background ? background : '',
          borderRadius: borderRadius ? borderRadius : 10,
          marginTop: marginTop ? HDP(marginTop) : 0,
          marginBottom: marginBottom ? HDP(marginBottom) : 0,
          fontFamily: family.SFProRoundedBold,
          fontSize: fontSize ? fontSize : RF(15),
          textAlign: textAlign ? textAlign : 'left',
          color: color ? color : palette.black,
        }}>
        {value}
      </Text>
    </TouchableOpacity>
  );
};
