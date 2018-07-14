import React,{Component} from 'react';
import { StyleSheet, Text, View,TextInput,FlatList, ScrollView, TouchableOpacity} from 'react-native';
import { Button,Avatar} from 'react-native-elements';
import { connect } from 'react-redux';
import {serchdata,followersdata} from '../store/action/Index';


class Search extends Component {
  state={
    searchBool:'none',SearchData:[],count:''
  }
  

  SearchResults(letter) {
    this.props.serchfunctionality(letter)
  }
userdetails(name){
  console.warn(this.props)
  this.props.navigation.navigate('Serchusers',{names:name});
}

renderdata(data){
      if(data){
          return(
            <View style={{  }}>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index}
                renderItem={({ item }) => this.renderSearch(item)}
            />
          </View>
          );
      }else false;
}
renderSearch(item) {
    // console.warn(item)    
  if (item.login) {
      return (
        <ScrollView>
          <TouchableOpacity onPress={()=>{this.userdetails(item.login)}}>
            <View style={{alignSelf: 'center', width: '74%',backgroundColor:'#E5E7E9',flexDirection:'row',margin:5}}>          
              <Avatar
                            samll
                            rounded
                            source={{uri:item.avatar_url}}
                            activeOpacity={0.7}
                            />
              <Text style={{margin:5}}>{item.login}</Text>
            </View>  
            </TouchableOpacity>
         </ScrollView>
      );
  }else{
      console.warn('else loop')
  } 
}
  render() {
    return (
      <View style={{flex:1}}>
               <ScrollView>        
         <Text style={{color:'red'}}> Total Count:{this.props.serch.total_count}</Text>
          <TextInput underlineColorAndroid='transparent' onChangeText={(text) => this.SearchResults(text)} placeholder="Search for gitusers"
              style={[{ alignSelf: 'center', width: '74%', height: 40,marginTop:20,backgroundColor: '#fff',  }]} />

              {this.renderdata(this.props.serch.items)}
                    </ScrollView>               
                   
      </View>
    );
  }
}
function mapStateToProps(state){
  // console.warn(state.user.serch);    
  return{        
       serch:state.user.serch
  }
}
function mapDispatchToProps(dispatch){
  return{ 
      serchfunctionality:(letter) => dispatch(serchdata(letter))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Search)

