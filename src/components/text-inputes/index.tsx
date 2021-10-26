import React, { FC } from 'react';
import { Text, View, TextInput as TN } from 'react-native';
import style from './style';
import { HDP } from '@helpers';
import { color } from '@components/theme';
import { palette } from '@components/theme';
import { SvgIcon } from '@components/svg-icon';

interface Props {
  padding?: number;
  onSubmit?: () => void;
  onPress?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onChangeText?: any;
  textAlignVertical?: 'auto' | 'top' | 'bottom' | 'center';
  value?: any;
  containerStyle?: any;
  inputStyle?: any;
  marginTop?: number;
  textAlign?: 'left' | 'right' | 'center';
  error?: string;
  editable?: boolean;
  maxLength?: number;
  placeholder?: any;
  inputErrMsg?: any;
  keyboardType?:
    | 'default'
    | 'email-address'
    | 'numeric'
    | 'phone-pad'
    | 'number-pad';
  textPaddingVertical?: number;
  bottomTitle?: string;
  rightIcon?: string;
  shouldFocus?: boolean;
  onTouchStart?: () => void;
  [x: string]: any;
  lessMargin?: boolean;
  isError?: boolean;
  label?: string;
  type?: 'password' | 'text';
  iconName1?: string;
  iconName2?: string;
}
export const TextInput: FC<Props> = ({
  padding,
  containerStyle,
  inputStyle,
  placeholder,
  placeholderTextColor = palette.placeholderColor,
  keyboardType,
  onSubmit,
  onFocus,
  onBlur,
  editable,
  textAlign,
  textAlignVertical,
  multiline,
  refValue,
  value,
  maxLength,
  type,
  onTouchStart,
  label,
  onChangeText,
  iconName1,
  iconName2,
}) => {
  return (
    <View>
      {label && <Text style={[style.labelDefault]}>{label}</Text>}

      <View style={[style.inputContainer]}>
        {iconName1 && <SvgIcon name={iconName1} size={20} />}
        <TN
          placeholder={placeholder}
          style={[ style.inputDefaultCss]}
          placeholderTextColor={placeholderTextColor}
          onFocus={onFocus}
          onBlur={onBlur}
          maxLength={maxLength}
          editable={editable}
          secureTextEntry={type === 'password'}
          textAlign={textAlign}
          textAlignVertical={textAlignVertical || 'top'}
          multiline={multiline}
          onSubmitEditing={onSubmit}
          ref={refValue}
          onChangeText={onChangeText}
          value={value}
          keyboardType={keyboardType}
          autoCapitalize={'none'}
       
        />
        {iconName2 && <SvgIcon name={iconName2} size={20} />}
      </View>
    </View>
  );
};
