import { Flex, Image } from "@chakra-ui/react";
import React from "react";

const Loading = () => {
  return (
    <Flex
      width="100vw"
      height="100vh"
      flexDirection={"column"}
      gap="2"
      justifyContent={"center"}
      alignItems="center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 34 38"
      >
        <g
          fill="none"
          fill-rule="evenodd"
          stroke="#a445ed"
          stroke-linecap="round"
          stroke-width="1.5"
        >
          <path d="M1 33V5a4 4 0 0 1 4-4h26.8A1.2 1.2 0 0 1 33 2.2v26.228M5 29h28M5 37h28" />
          <path stroke-linejoin="round" d="M5 37a4 4 0 1 1 0-8" />
          <path d="M11 9h12" />
        </g>
      </svg>
      <div className="loading-spinner"></div>
    </Flex>
  );
};

export default Loading;

//
