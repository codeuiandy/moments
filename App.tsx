import React from 'react';
import {SafeAreaView, Alert, View, Platform} from 'react-native';
import {Home, Onboarding} from '@screens';
import {SvgIcon} from '@components';
import {Text} from 'react-native';
import {family, palette} from '@components/theme';
import {HDP, RF, WP} from '@helpers';
import Navigation from './navigation';
import {AuthContextProvider} from './src/contexts/AuthContext';
const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: palette.white,
        height: '100%',
        paddingLeft: Platform.OS === 'ios' ? HDP(10) : 0,
        paddingRight: Platform.OS === 'ios' ? HDP(10) : 0,
      }}>
      <View
        style={{
          flex: 1,
          paddingLeft: 10,
          paddingRight: 10,
          width: '100%',
          // backgroundColor: 'red',
        }}>
        <AuthContextProvider>
          <Navigation />
        </AuthContextProvider>
      </View>
    </SafeAreaView>
  );
};

export default App;
