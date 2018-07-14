import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator , createStackNavigator , DrawerNavigator } from 'react-navigation';

import gitusers from './gitusers';
import Search from './Search';
import Serchusers from './Serchusers';
// import gitusers from './gitusers';



const Router = createStackNavigator ({  
    gitusers:{screen:gitusers,navigationOptions:{header:null}},
    Serchusers:{screen:Serchusers,navigationOptions:{header:null}},
    
    gitusers: { screen: createBottomTabNavigator ({
        gitusers: {
          screen: gitusers, 
          navigationOptions: { 
            tabBarLabel: ({tintColor}) => (<Text style={[ {color:tintColor,marginLeft:40}]}>users</Text>),
            header: null
          },
        },
        Search: {
          screen: Search,
          navigationOptions: {
            tabBarLabel: ({tintColor}) => (<Text style={[ {color:tintColor,marginLeft:40}]}>search sers</Text>),
            header: null
          },
        },
        
      }, {
          cardStyle: { backgroundColor: 'rgba(0,0,0,0.5)' },
          tabBarPosition: 'bottom',
          lazy: true,
          animationEnabled: true,
          swipeEnabled: true,
          upperCaseLabel: false,
          tabBarOptions: {
            activeTintColor: '#FF4D4D',
            inactiveTintColor: '#1b1b1b',
            showIcon: true,
            //focused: true,
            style: {
              backgroundColor: '#FFF', borderTopWidth:0.4, borderTopColor:'#EEE'
            },
            indicatorStyle: { display: 'none' },
            allowFontScaling: true, 
            labelStyle: {
              fontSize: 11,
            }
          },
        })
        , navigationOptions:{header:null}}
},{ initialRouteName: 'gitusers' });

export default Router;
