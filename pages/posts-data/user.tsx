import React from "react";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { usersListSelector } from "./users-list";
import { atom, selector } from "recoil";
import Link from "next/link";
import { VStack } from "@chakra-ui/react";

export const userClicked = atom({
  key: "user-click",
  default: false,
});

export default function User() {
  const usersList = useRecoilValue<any>(usersListSelector);

  return (
    <>
      <VStack w="100%" mt={10}>
        {usersList.map((item: any) => (
          <Link
            href={{
              pathname: "posts-data/user-details",
              query: { userId: item.id, userName: item.title },
            }}
            passHref
          >
            <p>{item.title}</p>
          </Link>
        ))}
      </VStack>
    </>
  );
}
