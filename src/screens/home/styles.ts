import {StyleSheet} from 'react-native'
import { HDP, WP } from '@helpers';
import { palette } from '@components/theme';

const styles = StyleSheet.create({
    container: {borderWidth: 1},
    footerContainer:{
        height: HDP(55),
        width: WP(100),
        backgroundColor:"#F0F8FF",
        flexDirection:"row",
        alignItems:"center"
    },
    footerChild:{
        marginRight:HDP(25)
    }
})

export default styles