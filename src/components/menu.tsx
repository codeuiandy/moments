import React, {useState, useEffect, useContext, useCallback} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {Container, H1, H2, P, ImageWrap, InputWrap, TouchWrap, SizedBox} from "./lib/lib";
import {SafeAreaView} from "react-native-safe-area-context";

// import AppColors from "../helpers/_colors";
// import {color} from "theme";
import {SvgIcon} from "./svg-icon";

export const NavMenu = ({state, descriptors, navigation}: any) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  const MenuIcons = useCallback(({label, status}: any) => {
    switch (label.toLowerCase()) {
      case "settings":
        return <SvgIcon name={status ? "search-active" : "search"} size={25} />;
      case "home":
        return <SvgIcon name={status ? "ugly-active" : "ugly"} size={25} />;
      case "details":
        return <SvgIcon name={status ? "bookmark-active" : "bookmark"} size={25} />;
      default:
        return <SvgIcon name={status ? "home-active" : "home"} size={25} />;
    }
  }, []);

  return (
    <SafeAreaView
      edges={["bottom"]}
      style={{
        backgroundColor: `red`,
      }}>
      <Container dir="row" horizontalAlignment="space-between" verticalAlignment="center" backgroundColor={`red`} elevation={10}>
        {state.routes.map((route: any, index: any) => {
          const {options} = descriptors[route.key];
          const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;
          const isFocused = state.index === index;
          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{flex: 1, justifyContent: "center"}}>
              <Container paddingTop={1}>{<MenuIcons label={label} status={isFocused} />}</Container>
              <Container horizontalAlignment="center">
                <SizedBox height={1} />
              </Container>
            </TouchableOpacity>
          );
        })}
      </Container>
    </SafeAreaView>
  );
};
