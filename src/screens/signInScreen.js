import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import COLORS from '../const/COLORS'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import STYLES from '../styles'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
const signInScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{paddingHorizontal:20,flex:1,backgroundColor:COLORS.white}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flexDirection:'row', marginTop:40}}>
                <Text style={{fontWeight:'bold',fontSize:22,color:COLORS.dark}}>FOX</Text>
                <Text style={{fontWeight:'bold',fontSize:22,color:COLORS.secondry}}>HUB</Text>
                </View>
                <View style={{marginTop:40}}>
                    <Text style={{fontWeight:'bold',fontSize:27,color:COLORS.dark}}>Welcome Back,</Text>
                    <Text style={{fontWeight:'bold',fontSize:19,color:COLORS.light}}>Sign In to Continue</Text>
                </View>
                <View style={{marginTop:20}}>
                    <View style={STYLES.inputContainer}>
                    <MaterialCommunityIcons style={STYLES.inputIconr} name='email' size={20} color={COLORS.light}></MaterialCommunityIcons>
                    <TextInput placeholder='Email' style={STYLES.imput}></TextInput>
                    </View>
                </View>
                <View style={{marginTop:20}}>
                    <View style={STYLES.inputContainer}>
                    <MaterialCommunityIcons style={STYLES.inputIconr} name='form-textbox-password' size={20} color={COLORS.light}></MaterialCommunityIcons>
                    <TextInput secureTextEntry placeholder='password' style={STYLES.imput}></TextInput>
                    </View>
                </View>
                <View style={STYLES.btnPrimary}>
                    <Text style={{color:COLORS.white, fontWeight:'bold',fontSize:18}}>SignIn</Text>
                </View>
                <View style={{marginVertical:20,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <View style={STYLES.line}/>
                    <Text style={{fontWeight:'bold', marginHorizontal:5}}>OR</Text>
                    <View style={STYLES.line}/>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={STYLES.btnSecondary}>
                        <Text style={{fontWeight:'bold',fontSize:18}}>Sign in with</Text>
                        <Entypo style={{ paddingStart:5 }} name='facebook' size={20} color='blue'/>
                    </View>
                    <View style={{width:10}}/>
                    <View style={STYLES.btnSecondary}>
                        <Text style={{fontWeight:'bold',fontSize:18}}>Sign in with</Text>
                        <Ionicons style={{ paddingStart:5 }} name='logo-google' size={20} color='green'/>
                    </View>
                </View>
                <View style={{flexDirection:'row',
                                justifyContent:'center',
                                marginTop:40}}>
                    <Text style={{color:COLORS.light,fontWeight:'bold'}}>Don't you have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('signUp')}>
                            <Text style={{color: COLORS.pink, fontWeight:'bold'}}>Sign up</Text>
                        </TouchableOpacity>
                </View>
                

            </ScrollView>
        </SafeAreaView>
    )
}

export default signInScreen
