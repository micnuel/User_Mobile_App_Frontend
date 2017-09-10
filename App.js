import React, {Component} from 'react';
import {
    StatusBar,
    Text
} from 'react-native';

import NavigationExperimental from 'react-native-deprecated-custom-components';
import List from './List';
import User from './User';

const Routemapper = (route, navigationOperations, onComponentRef) =>{
    if(route.name === 'list'){
        return(
            <List navigator ={navigationOperations} />
        );
    } else if (route.name === 'user'){
        return(
            <User 
            user ={route.user}
            navigator={navigationOperations}
            />
        );
    }
};

export default class App extends Component{
    componentDidMount(){
        StatusBar.setHidden(true);
    }
    render() {
        return(
            <NavigationExperimental.Navigator 
            initialRoute = {{ name: 'list'}}
            configureScene = {( route, routeStack) =>
            NavigationExperimental.Navigator.SceneConfigs.FloatFromBottom}
            renderScene ={ Routemapper}
            />
        );
    }
}

