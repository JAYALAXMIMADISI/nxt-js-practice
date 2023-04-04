import React from "react";
import { atom, useRecoilState, useRecoilValue, selector } from "recoil";
import User from "./user";
import { Box, Center } from "@chakra-ui/react";

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
    <Box w='50%' textAlign='center'>
    <Center fontWeight='bold' fontSize='20px'>Posts Data</Center>
      <User/>
    </Box>
  );
}
