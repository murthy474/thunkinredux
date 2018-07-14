
import React, { Component } from 'react';
import {
  Platform,FlatList,
  Text,Image,
  View,
  TouchableHighlight,ScrollView,
  TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';
import { Button,Avatar} from 'react-native-elements';
import {singleuser,followersdata} from '../store/action/Index';



class Serchusers extends Component{
   state={
   user:{},username:''
   }
    
    componentDidMount(){
       this.setState({username:this.props.navigation.state.params.names},()=>{
           this.fetchcall()})
       }
    fetchcall(){
        if(this.state.username){
            this.props.singleuser(this.state.username)
        }else false;
       }

      indiuladata(data){
        this.props.followers(data)
        this.props.navigation.navigate('gitusers',{userdata:data}); 
            // this.props.navigation.navigate('followers');
    }
    followers(url){
      var cleanurl = url.substring(0, url.length - 13)
    //   console.warn(cleanurl)
        this.props.following(cleanurl)
        this.props.navigation.navigate('gitusers',{userdata:cleanurl});
    }
    renderdata(data){
        if(data){
            return(
                <ScrollView >
           
            <View style={{alignSelf: 'center', width: '74%',flexDirection:'row',margin:5}}>          
            <Image
                    style={{width:'100%', height: 300}}
                    source={{uri:data.avatar_url }}
                    />
             
              
            </View>  
            <Text style={{margin:5,fontSize:20,color:'red',marginHorizontal:15,marginVertical:8}}>NAME:{data.login}</Text>
            <Text style={{marginHorizontal:15,marginVertical:8}}>public_repos:{data.public_repos}</Text>
            <Text style={{marginHorizontal:15,marginVertical:8}}>public_gists:{data.public_gists}</Text>
            <Text style={{marginHorizontal:15,marginVertical:8}}>location:{data.location}</Text>
            
            <View style={{flexDirection:'row',alignSelf:'center'}}>
                <TouchableOpacity style={{flexDirection:'row',margin:5,borderWidth:0.5}} onPress={()=>{this.indiuladata(data.followers_url)}}>
                        <Text style={{marginHorizontal:15,marginVertical:8}}>Followers({data.followers})</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row',margin:5,borderWidth:0.5}} onPress={()=>{this.followers(data.following_url)}}>
                        <Text style={{marginHorizontal:15,marginVertical:8}}>Following({data.following})</Text>
                </TouchableOpacity>
            </View>
         </ScrollView>
            );
        }else{
            return false;
        }
    }
   
     
    render() {
        return(
            <View style={{flex:1}}>
                {this.renderdata(this.props.single)}
            </View>
        );
    }
}


function mapStateToProps(state){
    // console.warn(state.user.singleuser);    
    return{        
         single:state.user.singleuser
    }
  }
  function mapDispatchToProps(dispatch){
    return{ 
        singleuser:(letter) => dispatch(singleuser(letter)),
        followers:(url) => dispatch(followersdata(url)),
        following:(url) => dispatch(followersdata(url))
        
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Serchusers)
  