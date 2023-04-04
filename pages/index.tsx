import { RecoilRoot } from "recoil";
import InputPage from "./todos/input";
import React from "react";
import UsersListComponent from "./posts-data/users-list";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Main from "./main";

export default function Home() {
  const theme = extendTheme({
    colors: {
      brand: {
        50: "#44337A",
        100: "#B794F4",
        500: "#B794F4",
      },
      check: {
        500: "red",
      },
    },
  });

  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <React.Suspense fallback={<div>Loading...</div>}>
          <div style={{ display: "flex", width: "100%" }}>
            <UsersListComponent />
            <InputPage />
          </div>
        </React.Suspense>
      </ChakraProvider>
    </RecoilRoot>
  );
}
