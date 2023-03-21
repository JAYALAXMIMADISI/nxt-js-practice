import React from "react";
import { useRecoilValue, selector, atom, useRecoilState, RecoilRoot } from "recoil";
import { usersListSelector } from "./users-list";
import { useRouter } from "next/router";

console.log("check useRouter", useRouter);

// import {userDetailsSelector} from './user'

// const userDetails = atom({
//     key: "makeUser",
//     default: "",
//   });

// const det=useRecoilValue(userDetails)

export default function UserDetails() {
  const details: any = useRouter();
  {
    console.log("check for id value", details);
  }
const {userId,userName}=details.query
//   const userDetails = atom({
//     key: "makeUser",
//     default: "",
//   });
//   const userDetailsSelector = selector({
//     key: "makeUserSelector",
//     get: async({ get }: any) => {

//         const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//         const res = await response.json();

//       // const value=useRecoilValue<any>(usersListSelector)
//     //   const userIdreturn = get(userDetails);

//       const details1 =res.filter((item: any) => {
//         return item.id == details.query.userId;
//       });
//       {
//         console.log("check getUserData", details);
//       }

//       return details1;
//     },
//   });

  //   const [userId, setUserId] = useRecoilState(userDetails);

//   const idValue = useRecoilValue(userDetailsSelector);

  // const getUserData = useRecoilValue(userDetailsSelector);

  return (
    <>
      <h1>{userId}</h1>
     <h1>{userName}</h1>
    </>
  );
}
