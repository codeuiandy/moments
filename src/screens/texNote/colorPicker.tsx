import React, {FC, useEffect} from 'react';
import {
  View,
  Text,
  TextInput as Input,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
//@ts-ignore
import style from './style';
import {palette} from '../../components/theme/palette';
import {HDP, HP} from '@helpers';
import {SvgIcon, FloatBtn, TextInput, SizedBox, H1, P} from '@components';
import Swiper from 'react-native-swiper';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {useState} from 'react';
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flex: 1,
    height: HP(100),
    width: `100%`,
  },
  wrapper: {
    height: HDP(210),
    width: `100%`,
    paddingTop: 20,
    borderRadius: 4,
    paddingLeft: 14,
    // position: 'absolute',
    // bottom: 0,
  },

  onBoardCol1: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    width: `100%`,
  },

  onBoardCol2: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
    // paddingBottom: 30,
  },
  slide1: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  slide2: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
// setNote

interface Props {
  setNote: any;
  note: any;
}
export const ColorPicker: FC<Props> = ({setNote, note}) => {
  const [slidePos, setSlidePos] = useState(0);
  const [selectedClr, setselectedClr] = useState({
    background: '',
    text: '',
  });
  const [colors, setColor] = useState([
    {
      clr: '#F19C38',
    },
    {
      clr: '#FFC700',
    },

    {
      clr: '#A7F02F',
    },
    {
      clr: '#C4C4C4',
    },
    {
      clr: '#7D8E11',
    },

    {
      clr: '#4D0202',
    },
    {
      clr: '#00E4D7',
    },

    {
      clr: '#072FFD',
    },
    {
      clr: '#FF0606',
    },
    {
      clr: '#E87777',
    },
    {
      clr: 'black',
    },
  ]);
  return (
    <View
      style={[
        styles.wrapper,
        {
          backgroundColor:
            slidePos == 1 ? selectedClr.text : selectedClr.background,
        },
      ]}>
      {slidePos == 1 ? (
        <P value="TEXT COLOUR " />
      ) : (
        <P value="BACKGROUND COLOUR " />
      )}

      <SizedBox height={10} />
      <Swiper
        paginationStyle={{}}
        showsButtons={false}
        onIndexChanged={index => {
          setSlidePos(index);
        }}
        dot={
          <View
            style={{
              backgroundColor: palette.grey,
              width: 8,
              height: 8,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
            }}
          />
        }
        activeDot={
          <View
            style={{
              backgroundColor: palette.orange,
              width: 8,
              height: 8,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
            }}
          />
        }>
        <View style={styles.slide1}>
          <TouchableOpacity
            onPress={() => {
              setselectedClr({
                ...selectedClr,
                background: 'white',
              });
              setNote({...note, backgroundColor: 'white'});
            }}>
            <View
              style={{
                width: HDP(40),
                height: HDP(40),
                backgroundColor: 'white',
                borderWidth: 2,
                borderRadius: HDP(50),
                marginBottom: HDP(15),
                marginRight: HDP(10),
                borderColor: '#24292E',
              }}></View>
          </TouchableOpacity>
          {colors.map((data, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setselectedClr({
                    ...selectedClr,
                    background: data.clr,
                  });
                  setNote({...note, backgroundColor: data.clr});
                }}>
                <View
                  style={{
                    width: HDP(40),
                    height: HDP(40),
                    backgroundColor: `${data.clr}`,
                    borderRadius: HDP(50),
                    marginBottom: HDP(15),
                    marginRight: index == 10 ? 0 : HDP(10),
                  }}></View>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.slide2}>
          <TouchableOpacity
            onPress={() => {
              setselectedClr({
                ...selectedClr,
                text: 'white',
              });
              setNote({...note, textColor: 'white'});
            }}>
            <View
              style={{
                width: HDP(40),
                height: HDP(40),
                backgroundColor: 'white',
                borderWidth: 2,
                borderRadius: HDP(50),
                marginBottom: HDP(15),
                marginRight: HDP(10),
                borderColor: '#24292E',
              }}></View>
          </TouchableOpacity>
          {colors.map((data, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setselectedClr({
                    ...selectedClr,
                    text: data.clr,
                  });

                  setNote({...note, textColor: data.clr});
                }}>
                <View
                  key={index}
                  style={{
                    width: HDP(40),
                    height: HDP(40),
                    backgroundColor: `${data.clr}`,
                    borderRadius: 50,
                    marginBottom: 15,
                    marginRight: index == 10 ? 0 : HDP(10),
                  }}></View>
              </TouchableOpacity>
            );
          })}
        </View>
      </Swiper>
    </View>
  );
};
