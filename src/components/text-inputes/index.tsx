import React, { FC } from "react";
import { View, Text,TextInput as Input } from "react-native";
import style from './style'

export const TextInput: FC  =() => {
  return (
    <View>
      <Text>{`Text input`}</Text>
      <Input placeholder="Example"/>
    </View>
  );
};


