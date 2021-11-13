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
    },

    onBoardCol1: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        width: `100%`,
      },
    
      onBoardCol2: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red',
        // paddingBottom: 30,
      },

      
})

export default styles