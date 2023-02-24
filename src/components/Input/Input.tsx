import { SearchIcon } from "@chakra-ui/icons";
import { InputGroup, InputRightElement, Input } from "@chakra-ui/input";
import { Button, useColorModeValue } from "@chakra-ui/react";
import React, { useState, useRef } from "react";

const InputField = () => {
  const [value, setValue] = useState("");
  const bg = useColorModeValue("input", "darkerBlack");
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmitValue = (e: React.FormEvent) => {
    e.preventDefault();

    inputRef.current?.blur();
    console.log(value);
  };
  return (
    <form onSubmit={onSubmitValue}>
      <InputGroup size="md">
        <Input
          ref={inputRef}
          pr="4.5rem"
          variant="filled"
          size="lg"
          fontSize="xl"
          height={{ base: "3rem", md: "3.7rem" }}
          borderRadius="10px"
          fontWeight="bold"
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
    </form>
  );
};

export default InputField;
