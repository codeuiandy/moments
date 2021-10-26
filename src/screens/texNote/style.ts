import {StyleSheet} from 'react-native'
import { HDP, WP } from '@helpers';
import { palette } from '@components/theme';

const styles = StyleSheet.create({
    noteContainer:{
     flex: 1,
     backgroundColor:palette.white,
     paddingTop:HDP(30),
     justifyContent:"space-between"

    },
    footerChild:{
        marginRight:HDP(25)
    },
    noteBottomActions:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:HDP(30)
    },
    noteBottomActionsChild:{
     flexDirection:"row",
    }
})

export default styles