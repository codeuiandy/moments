import React, {useState,useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {palette} from './theme/palette';
import {SvgIcon} from './svg-icon/index';
import {HDP} from '../helpers/index';
import {AppContext} from '../../src/contexts/AppContext'
function Header({headerProps, title}) {
  const {setSaveNote} = useContext(AppContext)
  console.log(title);
  return title == 'Home' ? (
    <View style={styles.headerContainer}>
      <View>
        <View style={styles.headerBurgerCon}>
          <TouchableOpacity
            onPress={() => headerProps.navigation.toggleDrawer()}>
            <SvgIcon name="Burger" width={22} height={22} />
          </TouchableOpacity>

          <View style={styles.headerLogo}>
            <SvgIcon name="LogoBlack" width={85} height={40} />
          </View>
        </View>
      </View>

      <View style={styles.headerBurgerCon}>
        <TouchableOpacity>
          <SvgIcon name="box" width={22} height={22} />
        </TouchableOpacity>

        <View style={styles.headerLogo}>
          <SvgIcon name="search" width={22} height={22} />
        </View>
      </View>
    </View>
  ) : title == 'TextNote' || title == "TextNoteEdit" ? (
    <View style={styles.headerContainer}>
      <View>
        <View style={styles.headerBurgerCon}>
          <TouchableOpacity onPress={() => headerProps.navigation.goBack()}>
            <SvgIcon name="ArrowLeft" width={30} height={40} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.headerBurgerCon}>
        <TouchableOpacity>
          <SvgIcon name="label" width={24} height={24} />
        </TouchableOpacity>
<TouchableOpacity onPress={()=>setSaveNote(true)}>
<View style={styles.headerLogo}>
          <SvgIcon name="save" width={24} height={24} />
        </View>
</TouchableOpacity>
       
      </View>
    </View>
  ) : null;
}

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    height: HDP(50),
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: palette.white,
    alignItems: 'center',
    paddingTop: HDP(17),
  },
  headerBurgerCon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLogo: {
    marginLeft: 10,
  },
  logoContainer: {
    marginLeft: 0,
    width: 140,
    height: 60,
    paddingLeft: 20,
    marginTop: 40,
  },
});
