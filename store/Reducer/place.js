import {SET_DATA,SERCH_DATA,SINGLE_DATA,FOLLOWERS_DATA} from '../action/action.types';

let initialstatus = {
    place: "",
    serch:"",
    singleuser:"",
    followers:""
}

const user =(state = initialstatus,action) => {
    switch (action.type) {
        case SET_DATA :
           return {
               ...state,
                place:action.users
           };
           case SERCH_DATA:{
               return{
                   ...state,
                   serch:action.serch
               };
           }
           case SINGLE_DATA:{
               return{
                   ...state,
                   singleuser:action.single 
               }
           }
           case FOLLOWERS_DATA:{
               return{
                   ...state,
                   place:action.followers
               }
           }
        default : 
            return state;
    }
}
export default user;



