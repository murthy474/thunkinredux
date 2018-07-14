import React,{Component} from 'react';
import {View,Text,FlatList,ScrollView,TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import {getdata,followersdata} from '../store/action/Index';
import { bindActionCreators } from 'redux';
import { Button,Avatar} from 'react-native-elements';


class gitusers extends Component{

    componentDidMount(){
            this.props.getAllUses();
    }
   
    indiuladata(data){
        this.props.followers(data)
       
    }
    following(url){
      var cleanurl = url.substring(0, url.length - 13)
    this.props.following(cleanurl)
    }
    renderdata(item){
        
        return(
            <ScrollView >
               <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Serchusers',{names:item.login})}}>
               <View style={{alignSelf: 'center', width: '74%',flexDirection:'row',margin:5}}>          
                  <Avatar
                                samll
                                sqare
                                source={{uri:item.avatar_url='' ? '': item.avatar_url}}
                                activeOpacity={0.7}
                                />
                  <Text style={{margin:5}}>{item.login}</Text>
                  </View>                    
                </TouchableOpacity>
                <View style={{flexDirection:'row',alignSelf:'center'}}>
                    <TouchableOpacity style={{flexDirection:'row',margin:5,borderWidth:0.5}} onPress={()=>{this.indiuladata(item.followers_url)}}>
                            <Text style={{marginHorizontal:15,marginVertical:8}}>Followers</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection:'row',margin:5,borderWidth:0.5}} onPress={()=>{this.following(item.following_url)}}>
                            <Text style={{marginHorizontal:15,marginVertical:8}}>Following</Text>
                    </TouchableOpacity>
                </View>
             </ScrollView>
           );
    }
    renderfatlist(data){
        // console.warn(data)
        return(
            <FlatList
            data={data}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => this.renderdata(item)}
        />
        );
    }
    updataprops(){
        if(this.props.followers !== ''){
            // console.warn(this.props.followers)
            this.renderfatlist()
        }
    }
    render(){
        // {this.updataprops(this.props.followers)}
        
        return(
            <View style={{flex:1}}>
               <View>
                   {/* {console.warn(this.props.setfollowers)} */}
                   {this.renderfatlist( this.props.place)}
               </View>
            </View>
        );
    }
}

function mapStateToProps(state){
    console.warn(state.user.followers);    
    return{        
        place:state.user.place,
        // setfollowers:state.user.followers,
    }
}
function mapDispatchToProps(dispatch){
    return{ 
        getAllUses:() => dispatch(getdata()),
        followers:(url)=>dispatch(followersdata(url)),
        following:(url)=>dispatch(followersdata(url))
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(gitusers);