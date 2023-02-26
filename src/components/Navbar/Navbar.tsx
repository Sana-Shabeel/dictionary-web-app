import React, { useState } from "react";
import {
  Box,
  Divider,
  Flex,
  Image,
  Switch,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import DropDown from "./DropDown";
import MoonIcon from "../../icons/MoonIcon";

const Navbar = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  // const color = useColorModeValue("gray", "blue");

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      padding="2em 0"
      marginInline="auto"
    >
      <Image src="/public/images/logo.svg" />
      <Flex alignItems="center" gap={{ base: "8px", md: "1rem" }}>
        <DropDown />
        <Box height="2rem" width="1.6px" bg={"lightGray"}></Box>
        <Flex alignItems="center" gap={{ base: "10px", md: "1rem" }}>
          <Switch
            size={{ base: "sm", md: "lg" }}
            onChange={() => toggleColorMode()}
          />
          <MoonIcon />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
