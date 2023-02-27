import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Text, useColorModeValue } from "@chakra-ui/react";
import React, { useContext, useRef } from "react";
import { FontContext } from "../../App";

interface Props {
  value: string;
  inputError: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onSubmitValue: (
    e: React.FormEvent,
    inputRef: React.RefObject<HTMLInputElement>
  ) => void;
}

const InputField = ({ value, inputError, setValue, onSubmitValue }: Props) => {
  const bg = useColorModeValue("input", "darkerBlack");
  const inputRef = useRef<HTMLInputElement>(null);

  const fontContext = useContext(FontContext);

  return (
    <form onSubmit={(e) => onSubmitValue(e, inputRef)}>
      <InputGroup size="md">
        <Input
          defaultValue={value}
          ref={inputRef}
          pr="4.5rem"
          variant="filled"
          size="lg"
          fontSize="xl"
          height={{ base: "3rem", md: "3.7rem" }}
          borderRadius="10px"
          fontWeight="bold"
          fontFamily={fontContext.selected.fontFamily}
          type="text"
          bg={bg}
          placeholder="Search for any word..."
          _placeholder={{ fontWeight: "700" }}
          onChange={(e) => setValue(e.target.value)}
        />
        <InputRightElement width="4.5rem" height="100%">
          <SearchIcon color={"purple"} />
        </InputRightElement>
      </InputGroup>
      {inputError && (
        <Text fontSize={"1.2rem"} color="red" textAlign="center" mt={"1rem"}>
          {inputError}
        </Text>
      )}
    </form>
  );
};

export default InputField;
