import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Flex>
        <Navbar />
      </Flex>
    </div>
  );
}

export default App;
