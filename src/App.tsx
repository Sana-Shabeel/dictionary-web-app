import {
  Box,
  Flex,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import InputField from "./components/Input/Input";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Box width={{ base: "93%", lg: "800px" }} marginInline="auto">
      <Navbar />
      <InputField />

      <Text fontSize="5rem" textAlign="center">
        hello
      </Text>
    </Box>
  );
}

export default App;
