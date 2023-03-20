import React from 'react'
import { useRecoilValue,selector,atom } from 'recoil';
import { usersListSelector } from './users-list';

// import {userDetailsSelector} from './user'

const userDetails = atom({
    key: "makeUser",
    default: "",
  });
  
export const userDetailsSelector = selector({
    key: "makeUserSelector",
    get: ({get}: any) => {
      const userIdreturn = get(userDetails);
  
      const details = useRecoilValue<any>(usersListSelector).filter((item: any) => {
       return item.id == userIdreturn;
      });
      {console.log("check getUserData", details)}
  
      return details;
    },
  });


export default function UserDetails(){
    const getUserData = useRecoilValue(userDetailsSelector);


    return(
        <>
        {getUserData.title}
        {getUserData.id}
        </>
    )
}