import React, {FC, useEffect,useState,useMemo} from 'react';
import {
  View,
  Text,
  TextInput as Input,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
//@ts-ignore
import style from './styles';
import {palette} from '../../components/theme/palette';
import {Card} from './card';
import {HDP} from '@helpers';
import {SvgIcon, FloatBtn} from '@components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback } from 'react';
import { withNavigationFocus } from 'react-navigation';
import { useFocusEffect } from '@react-navigation/native';
export const Home: FC = props => {
  const [previousNote,setPreviousNote]=useState([])
  const [show,setShow]=useState(true)
  useEffect(() => {
    // clearAsyncStorage()
    getPreviousNotes();
    const willFocusSubscription = props.navigation.addListener('focus', () => {
      getPreviousNotes();
    
  });
 
  return willFocusSubscription;
}, []);

useEffect(() => {
  const willFocusSubscriptiond = props.navigation.addListener('blur', () => {
    setPreviousNote([])
    props.navigation.setParams({data: null});
});



return willFocusSubscriptiond;
}, []);

useFocusEffect(
  useCallback(() => {
    return () => {
      props.navigation.setParams({ data: null });
    };
  }, []),
);



// useEffect(() => {
//   const willFocusSubscription = props.navigation.addListener('beforeRemove', () => {
//     Alert.alert("Leaving")
//  });
// //  return willFocusSubscription
//   return () => {
//     const willFocusSubscription = props.navigation.addListener('beforeRemove', () => {
//       Alert.alert("Leaving")
//    });
//    return willFocusSubscription
//   }
// }, [])

const clearAsyncStorage = async() => {
  AsyncStorage.clear();
}
  const getPreviousNotes = async () => {
    try {
     
      const jsonValue = await AsyncStorage.getItem('@text_note')
      if (jsonValue != null) {
        let jsNote = JSON.parse(jsonValue)
        setPreviousNote(jsNote)

        // console.log("jsNote>>>>>>>>>",jsNote);
      }
    
    } catch(e) {
      console.log(">>>>>>>EEEEss");
      
    }
  }
  return (
    
    <View
      style={{backgroundColor: palette.white, flex: 1, paddingTop: HDP(15)}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {
          previousNote.length!=0?previousNote.map((data,index)=>{
            console.log("MAP>>",index);
            
            return  <View key={index}><Card  data={data} index={index} navigation={props.navigation} /></View>
          }):
          <View style={{alignItems:"center",justifyContent:"center",flex:1,paddingTop:HDP(40)}}>
            <Text>NO NOTE FOUND</Text> 
          </View>
         
        }
      
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
      <FloatBtn navigation={props} />
    </View>
  );
};
 