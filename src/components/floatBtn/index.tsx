import React, {FC} from 'react';
import {View, Text, TouchableOpacity, Button as Buttons} from 'react-native';
import {palette} from '../theme/palette';
import {HDP, RF, WP} from '../../helpers/index';
import {family} from '@components/theme';
import { SvgIcon } from '@components';
import styles from './style'

interface Props {
    navigation:any
}
export const FloatBtn: FC<Props> = ({
    navigation
}) => {
  return (
      <TouchableOpacity onPress={()=>navigation.navigate("TextNote")}>
    <View style={styles.floatContainer}>
        <SvgIcon name="plus" height={25} width={25}/>
    </View>
    </TouchableOpacity>
  );
};
