import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {P, SvgIcon} from '@components';
import {HDP, HP, WP} from '@helpers';

export function DrawerContent(props) {
  const paperTheme = useTheme();

  // const { signOut, toggleTheme } = React.useContext(AuthContext);

  return (
    <View style={{flex: 1}}>
      {/* <DrawerContentScrollView {...props}> */}
      <View style={styles.logoContainer}>
        <SvgIcon name="AppLogo" />
      </View>

      <View style={styles.drawerContainer}>
        <View style={{flex: 1}}>
          <View style={styles.drawerContent}>
            <SvgIcon name="Home" width={18} height={18} />
            <P value="Home" paddingLeft={15} fontSize={17} />
          </View>

          <View style={styles.drawerContent}>
            <SvgIcon name="Label" width={18} height={18} />
            <P value="Labels" paddingLeft={15} fontSize={17} />
          </View>

          <View style={styles.drawerContent}>
            <SvgIcon name="Trash" width={18} height={18} />
            <P value="Deleted" paddingLeft={15} fontSize={17} />
          </View>
        </View>

        <View style={[styles.drawerContent, styles.drawerContentFooter]}>
          <SvgIcon name="Settings" width={21} height={20} />
          <P value="Settings" paddingLeft={15} fontSize={17} />
        </View>
      </View>
      {/* </DrawerContentScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'space-between',
    paddingLeft: HDP(20),
    paddingTop: HDP(20),
  },
  drawerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: HDP(25),
  },
  drawerContentFooter: {
    paddingBottom: HDP(50),
  },
  logoContainer: {
    marginLeft: 0,
    width: HDP(140),
    height: HDP(60),
    paddingLeft: HDP(20),
    marginTop: HDP(40),
  },
});
