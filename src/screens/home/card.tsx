import React, {FC} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
//@ts-ignore
import style from './styles';
import {palette} from '../../components/theme/palette';
import {HDP} from '@helpers';
import {H2, P, SvgIcon} from '@components';
import {color} from '../../components/theme/colors';
import {SizedBox} from '@components/lib/lib';

interface props {}
export const Card: FC<props> = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.col1}>
        <H2 value="Living the best life" color={palette.white} />
        <SizedBox height={1} />
        <P
          value="The best is yet to come and its is my 
          responsibility to align with all that God is 
          doing in this time and season don’t sleep on 
          God boy!There is more in you ..."
          color={palette.white}
          fontSize={HDP(13)}
        />
      </View>

      <View style={styles.col2}>
        <View>
          <P value="10:30" color={palette.white} fontSize={HDP(13)} />
        </View>
        <View style={styles.pen}>
          <SvgIcon name="pen" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    height: HDP(200),
    backgroundColor: '#635DAF',
    borderRadius: HDP(10),
    borderBottomRightRadius: HDP(40),
    padding: HDP(20),
    marginBottom: HDP(8),
    justifyContent: 'space-between',
    alignContent: 'space-between',
  },
  col1: {
    marginBottom: HDP(10),
  },
  col2: {
    paddingBottom: HDP(10),
    paddingTop: HDP(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pen: {
    width: 20,
    height: 20,
  },
});
