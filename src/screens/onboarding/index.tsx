import React, {FC, useContext} from 'react';
import {
  View,
  Text,
  TextInput as Input,
  Alert,
  AppRegistry,
  StyleSheet,
} from 'react-native';
import style from './style';
import {Button, H1, P, SvgIcon} from '@components';
import {HDP} from '@helpers';
import GlobalStyle from '../../global';
import Swiper from 'react-native-swiper';
import {palette} from '@components/theme';
import {AuthContext} from '../../../src/contexts/AuthContext';
export const Onboarding: FC = () => {
  const {setCurrentState} = useContext(AuthContext);
  const styles = StyleSheet.create({
    wrapper: {
      // height: 200,
      // width: `100%`,
    },
    slide1: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    slide2: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    slide3: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    text: {
      color: 'black',
      fontSize: 30,
      fontWeight: 'bold',
    },
  });

  return (
    <View style={style.container}>
      <View style={style.onBoardCol1}>
        <SvgIcon name="logo" width={200} height={124} />
      </View>
      <View style={style.onBoardCol2}>
        <View style={{height: 170}}>
          <Swiper
            style={styles.wrapper}
            showsButtons={false}
            autoplay={true}
            //   height={100}
            // width={100}
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
              <H1 value="Capture the moment" />
              <P
                value="Thoughts are fickle, capture them before they disappear."
                textAlign="center"
                marginTop={4}
                marginBottom={4}
              />
            </View>
            <View style={styles.slide2}>
              <H1 value="Ideas    Memories     Events" />
              <P
                value="Be ready when they come"
                textAlign="center"
                marginTop={4}
                marginBottom={4}
              />
            </View>
          </Swiper>
        </View>
        <View style={GlobalStyle.Center}>
          <Button
            value="Get Started"
            Onclick={() => {
              setCurrentState('home');
            }}
            paddingTop={15}
            paddingBottom={15}
            paddingLeft={10}
            paddingRight={10}
            borderColor={`red`}
            width={HDP(200)}
            borderRadius={10}
          />
        </View>
      </View>
    </View>
  );
};
