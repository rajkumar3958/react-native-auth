import { StyleSheet} from 'react-native';
import COLORS from '../const/COLORS';

const STYLES = StyleSheet.create({
    inputContainer: {flexDirection:'row', marginTop: 20},
    inputIconr:{
        marginTop:15,
        position:'absolute',
    },
    imput:{
        paddingLeft: 30,
        fontSize:18,
        flex:1,
        color: COLORS.light,
        borderBottomWidth:0.5
    },
    btnPrimary:{
        backgroundColor: COLORS.primary,
        height:50,
        marginTop:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 5,
    },
    line:{
        height:1,
        width:30,
        backgroundColor: COLORS.light,
    },
    btnSecondary:{
        flex:1,
        flexDirection:'row',
        height:50,
        borderColor: COLORS.light,
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5
    }
});

export default STYLES;