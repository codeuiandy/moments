import React, {FC, useEffect} from 'react';
import {
  View,
  Text,
  TextInput as Input,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
//@ts-ignore
import style from './styles';
import {palette} from '../../components/theme/palette';
import {Card} from './card';
import {HDP} from '@helpers';
import {SvgIcon, FloatBtn} from '@components';

export const Home: FC = props => {
  useEffect(() => {
    console.log('props>>>', props);
  }, []);
  return (
    <View
      style={{backgroundColor: palette.white, flex: 1, paddingTop: HDP(15)}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>
      <View style={style.footerContainer}>
        <View style={style.footerChild}>
          <TouchableOpacity>
            <SvgIcon name="check" width={23} height={23} />
          </TouchableOpacity>
        </View>

        <View style={style.footerChild}>
          <TouchableOpacity>
            <SvgIcon name="mic" width={23} height={23} />
          </TouchableOpacity>
        </View>

        <View style={style.footerChild}>
          <TouchableOpacity>
            <SvgIcon name="image" width={23} height={23} />
          </TouchableOpacity>
        </View>

        <View style={style.footerChild}>
          <TouchableOpacity>
            <SvgIcon name="label" width={23} height={23} />
          </TouchableOpacity>
        </View>
      </View>
      <FloatBtn navigation={props.navigation} />
    </View>
  );
};
