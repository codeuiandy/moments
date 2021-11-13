import React, {FC} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
//@ts-ignore
import style from './styles';
import {palette} from '../../components/theme/palette';
import {HDP} from '@helpers';
import {H2, P, SizedBox, SvgIcon} from '@components';
import {color} from '../../components/theme/colors';
import moment from 'moment';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
interface props {data:any,index:any,navigation:any}
export const Card: FC<props> = ({data,index,navigation}) => {
  const {id}=data
  const saveNoteFun = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      // return console.log(jsonValue);
      await AsyncStorage.setItem('@edit_note', jsonValue);
    } catch (e) {
      // saving error
    }
  };
  return (
    <View  style={[styles.Container,{backgroundColor:data?.backgroundColor == "" || data?.backgroundColor == "white"?"#635DAF":data?.backgroundColor}]}>
      <View style={styles.col1}>
        <H2 value={`${data?.noteTitle}`} color={data?.textColor == "" || data?.textColor == "white"?"white":data?.textColor} />
        <SizedBox height={5}/>

        <P
          value={`${data?.noteBody}`}
          color={data?.textColor == "" || data?.textColor == "white"?"white":data?.textColor}
          fontSize={HDP(13)}
        />
      </View>
      <View style={styles.col2}>
        <View>
          <P value={`${moment(data?.time).format('hh:mm DD-MM-YYYY')}`} color={palette.white} fontSize={HDP(13)} />
        </View>
        <TouchableOpacity onPress={()=>{navigation.navigate(
    'TextNoteEdit');
    saveNoteFun(data)}}>
        <View style={styles.pen}>
          <SvgIcon name="pen" />
        </View>
        </TouchableOpacity>
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
