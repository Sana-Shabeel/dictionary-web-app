import {
  Box,
  Flex,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const { toggleColorMode, colorMode } = useColorMode();
  const textColor = useColorModeValue("lightGray", "purple");

  console.log(colorMode);

  return (
    <Box width={{ base: "93%", lg: "800px" }} marginInline="auto">
      <Flex>
        <Navbar />
      </Flex>
      <Text fontFamily="4rem">{colorMode === "light" ? "LIGHT" : "DARK"}</Text>
    </Box>
  );
}

export default App;
