import { Box, Flex, Text } from "@chakra-ui/react";
import axios, { AxiosError } from "axios";

interface Props {
  error: any;
}

const Error = ({ error }: Props) => {
  return (
    <Flex
      margin={"10rem 0"}
      textAlign={"center"}
      flexDirection="column"
      justifyContent={"center"}
      alignItems="center"
    >
      <Box width={{ base: "300px", md: "408px" }} margin="0 auto">
        <Text fontSize={{ base: "3rem", md: "4rem" }}>😕</Text>
        <Text
          fontSize={{ base: "1.3rem", md: "2rem" }}
          margin="1rem 0"
          fontWeight="bold"
        >
          {error?.response?.data.title}
        </Text>
        <Text
          fontSize={{ base: "1rem", md: "1.4rem" }}
          color={"darkGray"}
        >{`${error?.response?.data.message} ${error?.response?.data.resolution}`}</Text>
      </Box>
    </Flex>
  );
};

export default Error;
