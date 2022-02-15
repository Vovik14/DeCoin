import { StyleSheet } from "react-native";
import { textDecorationColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export const gStyle = StyleSheet.create({
    main:{
        flex: 1,
        backgroundColor: '#6B31E1',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontSize: 20,
        color: '#65E131'
    },
    text:{
        color: '#FDF5E6'
    },
    button:{
        
    },
    input:{
        color: 'black',
        textDecorationColor:'white',
        borderColor: 'black',
        backgroundColor: 'white',
        borderRadius:10,
        margin: 10  
    }
})