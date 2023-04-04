import React from "react";
import { useRouter } from "next/router";

export default function UserDetails() {
  const details: any = useRouter();

  const { userId, userName } = details.query;

  return (
    <>
      <h1>{userId}</h1>
      <h1>{userName}</h1>
    </>
  );
}
