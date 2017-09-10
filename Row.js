import React, {Component} from 'react';
import {
    Image, 
    StyleSheet, 
    Text, 
    TouchableOpacity,
    View

} from 'react-native';
import Dimensions from 'Dimensions';
const screen =Dimensions.get('window');

export default class Row extends Component{
    render ({user, onPress} =this.props){
        const {surName, imageThumb} = user;
        return(
            <TouchableOpacity
            //pass row style
            style={styles.row}
            onPress ={onPress}
            activeOpacity={0.7}
            >
            <Image source={{ uri: imageThumb}} style={styles.imageBackground} />

            <Text style={[styles.text, styles.title]}>{surName.toUpperCase()}</Text>

            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    row: {
      paddingBottom: 4,                   
    },
    imageBackground: {
      height: screen.height /5,          
      justifyContent: 'center',           
      alignItems: 'center',               
      width:screen.width /3,
    },
    text: {
      color: '#fff',                      
      backgroundColor: 'transparent',    
      fontFamily: 'Avenir',               
      fontWeight: 'bold',                
      textShadowColor: '#222',
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 4,
    },
    title: {
      fontSize: 22,                      
    },
    rating: {
      flexDirection: 'row',               
    },
    icon: {
      width: 22,                          
      height: 22,                         
      marginRight: 5,                    
    },
    value: {
      fontSize: 16,                      
    },
  });