import { SearchIcon } from "@chakra-ui/icons";
import { InputGroup, InputRightElement, Input } from "@chakra-ui/input";
import { Button, useColorModeValue } from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import useDebounce from "../../hooks/useDebounce";

interface Props {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onSubmitValue: (
    e: React.FormEvent,
    inputRef: React.RefObject<HTMLInputElement>
  ) => void;
}

const InputField = ({ value, setValue, onSubmitValue }: Props) => {
  const bg = useColorModeValue("input", "darkerBlack");
  const inputRef = useRef<HTMLInputElement>(null);

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
