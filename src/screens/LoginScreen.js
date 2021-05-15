import React from 'react';
import { StyleSheet, Text, View , TextInput, TouchableOpacity} from 'react-native';
import { Ionicons,Fontisto } from '@expo/vector-icons';
import TextInputField from '../components/TextInputField';
import CustomButton from '../components/CustomButton';
import ArrowButton from '../components/ArrowButton';

const LoginScreen=(props)=> {
    return (
        <View style={styles.container}>

            <ArrowButton/>

            <Text style={styles.header}>Verify Number</Text>
            <View style={styles.row}>
                <View>
                    <Text style={styles.circleShape}>+91</Text>
                </View>

                 <TextInputField text="Enter number" keyboardType={'numeric'} />

            </View>
            <CustomButton/>
        </View>
      );
    }

    export default LoginScreen;
    const styles = StyleSheet.create({
      container: {
        backgroundColor: '#fff',
        marginTop: 40,
        marginLeft: 10,
        marginRight:30
      },
      header: {
        fontSize: 22,
        fontWeight: 'bold',
        padding: 10,
        marginLeft: 12,
      },
      circleShape: {
          padding: 10,
          marginLeft: 22,
          height:48,
          width:45,
          color:"#808080",
          backgroundColor: '#EEECEC',
          marginTop:10,
          marginEnd:6,
          marginStart:6,
          borderRadius:24,
          textAlign:'center',
          textAlignVertical:'center'
        },
        row: {
            flexDirection: "row"
          },


});