import React from "react";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { usersListSelector } from "./users-list";
import { atom, selector } from "recoil";
// import UserDetails from "../components/user-details";
import Link from "next/link";

export const userClicked = atom({
  key: "user-click",
  default: false,
});

export default function User() {
  const usersList = useRecoilValue<any>(usersListSelector);

  const [userClickedStatus, setUserClickedStatus] = useRecoilState(userClicked);

  // const getUserDetails = (id: any) => {
  //   setUserId(id);
  //   setUserClickedStatus(true);
  // };

  return (
    <>
    {/* <RecoilRoot>       */}
      {usersList.map((item: any) => (
        // <div onClick={() => getUserDetails(item.id)}>{item.title}</div>
        <Link
          href={{
            pathname: "posts-data/user-details",
            query: { userId: item.id ,userName:item.title} ,
          }}
          passHref
        >
          <h1>{item.title}</h1>
        </Link>
      ))}

      {/* {userClickedStatus && <UserDetails details={idValue[0]}/>} */}
      {/* </RecoilRoot> */}

    </>
  );
}
