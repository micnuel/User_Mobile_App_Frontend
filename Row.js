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
        const {surName, imageLarge} = user;
        return(
            <TouchableOpacity
            //pass row style
            style={styles.row}
            onPress ={onPress}
            activeOpacity={0.7}
            >
            <View style ={styles.viewContainer}>
              <Text style={[styles.text, styles.title]}>&raquo;&raquo; {surName.toUpperCase()}</Text>
              <Image source={{ uri: imageLarge}} style={styles.imageBackground} />
            </View>
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
      width:screen.width /3,
      paddingRight:200
    },
    text: {
      color: '#C8E31D',                      
      backgroundColor: 'transparent',    
      fontFamily: 'Avenir',               
      fontWeight: 'bold',                
      textShadowColor: '#222',
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 4,
    },
    title: {
      fontSize: 22,
      paddingRight:20
    },
    viewContainer: {
      flexDirection: 'row',
      flex:1,
      backgroundColor:'#520E49',
      justifyContent: 'space-between',    
      alignItems: 'center',               
      
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