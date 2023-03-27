import { Box } from "@chakra-ui/react";
import axios, { AxiosError } from "axios";
import { createContext, useState } from "react";
import { useQuery } from "react-query";
import DisplayData from "./components/displayData/DisplayData";
import InputField from "./components/Input/Input";
import Error from "./components/LoadingError/Error";
import Loading from "./components/LoadingError/Loading";
import Navbar from "./components/Navbar/Navbar";
import useDebounce from "./hooks/useDebounce";

export interface FontContextType {
  selected: {
    title: string;
    fontFamily: string;
  };
  setSelected: React.Dispatch<
    React.SetStateAction<{
      title: string;
      fontFamily: string;
    }>
  >;
}

// export interface ErrorMsg {}

// context for font family
export const FontContext = createContext<FontContextType>({
  selected: {
    title: "",
    fontFamily: "string",
  },
  setSelected: () => {},
});

// fetch data
const fetchData = (value: string | undefined) => {
  return axios
    .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${value}`)
    .then((res) => res.data);
};

function App() {
  const [value, setValue] = useState("keyboard");
  const [inputError, setInputError] = useState("");
  // const [err, setErr] = useState({});
  // const debouncedValue = useDebounce(value, 200);

  // selected in dropdown component
  const [selected, setSelected] = useState({
    title: "Serif",
    fontFamily: "'Lora', serif",
  });
  // will be passed to context as a value
  const values = { selected, setSelected };

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["inputValue"],
    queryFn: () => {
      console.log("fetching");

      return fetchData(value);
    },
    retry: false,
  });

  const onSubmitValue = (
    e: React.FormEvent,
    inputRef: React.RefObject<HTMLInputElement>
  ) => {
    e.preventDefault();
    inputRef.current?.blur();

    if (inputRef.current?.value.trim().length === 0) {
      setInputError("Input cannot be empty");
    } else {
      setInputError("");
    }

    refetch();
  };

  if (isLoading) return <Loading />;

  return (
    <FontContext.Provider value={values}>
      <Box width={{ base: "93%", lg: "800px" }} marginInline="auto">
        <Navbar />
        <InputField
          value={value}
          inputError={inputError}
          setValue={setValue}
          onSubmitValue={onSubmitValue}
        />

        {error ? <Error error={error} /> : <DisplayData data={data} />}
      </Box>
    </FontContext.Provider>
  );
}

export default App;
