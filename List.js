import React, {Component} from 'react';
import{
    ListView,
    RefreshControl,
    Text
} from 'react-native';

import Row from './Row';
import axios from 'axios';

   

export default class List extends Component {
    state ={
        dataSource: new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !==row2,// cheack if this is row! or row1

        }),
        isRefreshing:false,
    }


    componentDidMount(){
     this._fetchData();
    }


    _fetchData =(user) =>{
        this.setState({isRefreshing: true});
        axios.get('http://localhost:8080/api/users')
            .then(resp => {                          
                const data = resp.data.users
                 this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(data),
                    isRefreshing:false
                });
             })
        
    }

    _renderRow =(user) =>{
       return(
           <Row
           user={user}
           onPress={()=>{
               this.props.navigator.push({
                   name:'user',
                   user:user,
               });
           }}
           />
       );
    }
    render(){
        return <ListView
        dataSource={this.state.dataSource}
        renderRow ={this._renderRow}
        refreshControl={
            <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={this._fetchData}
            />
        }
        />
    };
}
