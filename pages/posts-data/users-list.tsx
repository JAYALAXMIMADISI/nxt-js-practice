import React from "react";
import { atom, useRecoilState, useRecoilValue, selector } from "recoil";
import User from "./user";

const userListAtom = atom({
  key: "makeAtomUserList",
  default: {},
});

export const usersListSelector = selector({
  key: "user-selector",
  get: async (get) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const res = await response.json();
    return res;
  },
});

export default function UsersListComponent() {
  const [userList, setUserList] = useRecoilState(userListAtom);



  return (
    <>
      <User/>
    </>
  );
}
