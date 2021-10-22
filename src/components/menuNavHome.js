import React, { useState,} from "react";
import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'; 
import { palette } from './theme/palette';
import { SvgIcon } from './svg-icon/index';
import { HDP } from '../helpers/index';
function Header({headerProps,title}) {

    console.log(title);
    return (
      <View style={styles.headerContainer}>
        <View>
          <View style={styles.headerBurgerCon}>
            <TouchableOpacity onPress={()=>headerProps.navigation.toggleDrawer()}>
            <SvgIcon name="Burger" width={22} height={22}/>
            </TouchableOpacity>

            <View style={styles.headerLogo}>
            <SvgIcon name="LogoBlack" width={85} height={40}/></View>
            </View>
        </View>
      
        <View style={styles.headerBurgerCon}>
            <TouchableOpacity onPress={()=>props.toggleDrawer()}>
            <SvgIcon name="box" width={22} height={22}/>
            </TouchableOpacity>

            <View style={styles.headerLogo}>
            <SvgIcon name="search" width={22} height={22}/></View>
            </View>
          
         
      </View>
    );
  }

  export default Header

  const styles = StyleSheet.create({
    headerContainer: {
      height:HDP(50),
      width: '100%',
      justifyContent:"space-between",
      flexDirection:"row",
      backgroundColor:palette.white,
      alignItems:"center",
      paddingTop:HDP(17)
    },
    headerBurgerCon: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    headerLogo: {
    marginLeft:10
    },
    logoContainer: {
      marginLeft: 0,
      width: 140,
      height: 60,
      paddingLeft: 20,
      marginTop: 40,
    },
  });