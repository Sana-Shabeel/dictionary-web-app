import React from "react";
import { Flex } from "@chakra-ui/react";
import DropDown from "./DropDown";

const Navbar = () => {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems="center"
      width="100vw"
      border={"1px solid"}
      padding="0 2em"
    >
      <Flex fontSize="3rem">Logo</Flex>
      <DropDown />
    </Flex>
  );
};

export default Navbar;
