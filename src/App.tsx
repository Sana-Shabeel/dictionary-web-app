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
import DisplayData from "./components/displayData/DisplayData";
import InputField from "./components/Input/Input";
import Navbar from "./components/Navbar/Navbar";
import useDebounce from "./hooks/useDebounce";

const fetchData = (value: string | undefined) => {
  return axios
    .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${value}`)
    .then((res) => res.data);
};

function App() {
  const [value, setValue] = useState("keyboard");
  const debouncedValue = useDebounce(value, 200);

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["inputValue"],
    queryFn: () => {
      console.log("fetching");

      return fetchData(debouncedValue);
    },
  });

  const onSubmitValue = (
    e: React.FormEvent,
    inputRef: React.RefObject<HTMLInputElement>
  ) => {
    e.preventDefault();
    inputRef.current?.blur();

    refetch();
  };

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <pre>error</pre>;

  console.log(data[0].word);

  return (
    <Box width={{ base: "93%", lg: "800px" }} marginInline="auto">
      <Navbar />
      <InputField
        value={value}
        setValue={setValue}
        onSubmitValue={onSubmitValue}
      />

      <DisplayData />
    </Box>
  );
}

export default App;
