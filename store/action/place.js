import {SET_DATA,SERCH_DATA,SINGLE_DATA,FOLLOWERS_DATA} from './action.types';

export const getdata = ()=>{
    return (dispatch)=>{
        fetch( 'https://api.github.com/users' , {
            method: 'GET',
        }).then((response) => response.json())
            .then((users) => {
                // console.warn(users);
                dispatch(setdata(users))          
            })
            .catch((error) => {
                console.error(error);
            });
        
    }
}
export const serchdata = (text) =>{
    return (dispatch) =>{
        fetch( 'https://api.github.com/search/users?q=' + text , {
            method: 'GET',
        }).then((response) => response.json())
            .then((responseJson) => {
                dispatch(serchsetdata(responseJson))
                   })
            .catch((error) => {
                console.error(error);
            });
    }
}
export const singleuser = (name) =>{
    return (dispatch)=>{
        fetch( 'https://api.github.com/users/'+name , {
            method: 'GET',
        }).then((response) => response.json())
            .then((responseJson) => {
                //  console.warn(responseJson);
                 dispatch(setsingleuser(responseJson))
                   })
            .catch((error) => {
                console.error(error);
            });
    }
}
export const followersdata = (url)=>{
    return(dispatch)=>{
        fetch( url, {
            method: 'GET',
        }).then((response) => response.json())
            .then((responseJson) => {
                //  console.warn(responseJson);
                 dispatch(setfollowersdata(responseJson))
                   })
            .catch((error) => {
                console.error(error);
            });
    }
}
export const setfollowersdata = followers =>{
    return{
        type:FOLLOWERS_DATA,
        followers:followers
    }
}
export const setsingleuser = single=>{
    return{
        type:SINGLE_DATA,
        single:single
    }
}
export const serchsetdata = serch =>{
    return{
        type:SERCH_DATA,
        serch:serch
    }
}
export const setdata= users=>{
    return{
        type:SET_DATA,
        users:users

    }
}