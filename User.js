import React, {Component} from 'react';
import {
    Image,
    ScrollView, //scrollable container
    StyleSheet,
    Text,
    TouchableOpacity,
    View,


} from 'react-native';

export default class User extends Component{
    //extract values from user object
    render({user} =this.props){
      const {surName, address,otherName, imageLarge,tel, dob, gender, eMail,} = user;
        return (
            <View style={styles.container}>
                {/* use scrollView incase plot is too big to fit in screen */}
                <ScrollView
                    style ={{flex:1}}
                >
                <Text style={[ styles.text, styles.title]}> {surName.toUpperCase()}</Text>
                <View style={styles.avatar}>
                    <Image
                    source={{uri: imageLarge}}
                style={styles.icon}
              />
              {/* <Text style={[styles.text, styles.value]}> {contestName}%</Text> */}
              </View>
              <View style={styles.view}>
                  <Text style={styles.viewText}> Other Name(s): {otherName} </Text>
            </View>
            <View style={styles.view}>
                  <Text style={styles.viewText}> Address: {address} </Text>
            </View>
            <View style={styles.view}>
                  <Text style={styles.viewText}> Gender: {gender} </Text>
            </View>
            <View style={styles.view}>
                  <Text style={styles.viewText}> E-Mail: {eMail} </Text>
            </View>
            <View style={styles.view}>
                  <Text style={styles.viewText}> Tel: {tel} </Text>
            </View>
            <View style={styles.view}>
                  <Text style={styles.viewText}> D.O.B: {dob} </Text>
            </View>
            </ScrollView>
            <View style ={styles.buttonContainer}>
                <TouchableOpacity
                onPress={() =>{this.props.navigator.pop();}}
                activeOpacity={0.7}
                style={styles.button}
                >
                <Text style={styles.buttonText}> Close</Text>
                </TouchableOpacity>
            </View>
    </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,                          
      backgroundColor: '#333',         
    },
    imageBackground: {
      flex: 1,                            
      padding: 20                         
    },
    text: {
      backgroundColor: 'transparent',     
      color: '#fff',                    
      fontFamily: 'Avenir',              
      fontWeight: 'bold',                 
      textShadowColor: '#222',
      textShadowOffset: {width: 1, height: 1},
      textShadowRadius: 4,
    },
    title: {
      fontSize: 22,                      
      marginTop: 30,                      
      marginBottom: 5,                    
      textAlign: 'center',                
    },
    avatar: {
      flexDirection: 'row',               
      justifyContent: 'center',           
    },
    icon: {
      width: 22,                         
      height: 22,                         
      marginRight: 5,                     
    },
    value: {
      fontSize: 16,                       
    },
    view: {
      backgroundColor: 'rgba(255,255,255,0.5)', 
      marginTop: 10,                      
      padding: 0,                        
    },
    viewText: {
      color: '#333',                      
      fontFamily: 'Avenir',              
      fontSize: 25,                       
    },
    buttonContainer: {
      marginTop: 20,                     
    },
    button: {
      backgroundColor: '#617D8A',        
      padding: 15                        
    },
    buttonText: {
      color: '#fff',                      
      fontFamily: 'Avenir',               
      fontWeight: 'bold',                
      textAlign: 'center',                
    }
  });