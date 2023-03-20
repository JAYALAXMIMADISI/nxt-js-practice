import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { usersListSelector } from "./users-list";
import { atom, selector } from "recoil";
import UserDetails from "./user-details";
import Link from "next/link";







export default function User() {
  const usersList = useRecoilValue<any>(usersListSelector);




  // const [userId, setUserId] = useRecoilState(userDetails);


  // const getUserDetails = (id: any) => {
  //   setUserId(id);
  // };

  return (
    <>
      {usersList.map((item: any) => (
        // <div onClick={() => getUserDetails(item.id)}>{item.title}</div>
        <Link href={'/user-details'}>{item.title}</Link>
      ))}

      {/* <UserDetails /> */}
    </>
  );
}
