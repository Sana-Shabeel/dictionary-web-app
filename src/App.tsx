import {
  Box,
  Flex,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import InputField from "./components/Input/Input";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const { toggleColorMode, colorMode } = useColorMode();
  const textColor = useColorModeValue("lightGray", "purple");

  console.log(colorMode);

  return (
    <Box width={{ base: "93%", lg: "800px" }} marginInline="auto">
      <Navbar />
      <InputField />
    </Box>
  );
}

export default App;
