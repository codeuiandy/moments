import React, { FC } from "react";
import { View, Text,TextInput as Input, ScrollView } from "react-native";
//@ts-ignore
import style from './styles'
import { palette } from '../../components/theme/palette';
import { Card } from "./card";
import { HDP } from "@helpers";

export const Home: FC  =() => {
  return (
    <View style={{backgroundColor:palette.white,flex:1,paddingTop:HDP(15)}}>
      <ScrollView showsVerticalScrollIndicator={false}>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     </ScrollView>
    </View>
  );
};


