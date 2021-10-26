import React, {FC, useEffect} from 'react';
import {
  View,
  Text,
  TextInput as Input,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
//@ts-ignore
import style from './style';
import {palette} from '../../components/theme/palette';
import {HDP} from '@helpers';
import {SvgIcon, FloatBtn, TextInput, SizedBox} from '@components';

export const TextNote: FC = props => {

  return (
    <View style={style.noteContainer}>
        <View>
        <ScrollView showsVerticalScrollIndicator={false}>
   <View>
       <TextInput placeholder="Your title here" label='Your title here'/>
       <SizedBox height={20}/>
       <TextInput placeholder="The best is yet to come and its is my responsibility to align with all that God is doing in this time and season don’t sleep on God boy." label='Your note body' multiline={true}
   />
   </View>

 
   </ScrollView>
        </View>
        <View style={style.noteBottomActions}>
       <View style={style.noteBottomActionsChild}>
           <SvgIcon name="ColorPicker" width={23} height={23}/>
       </View>

       <View style={style.noteBottomActionsChild}>
           <SvgIcon name="undo" width={23} height={23}/>
           <SizedBox width={30}/>
           <SvgIcon name="redo" width={23} height={23}/>
       </View>

       <View style={style.noteBottomActionsChild}>
           <SvgIcon name="verticalDots" width={23} height={18}/>
       </View>
   </View>
    </View>
  );
};
