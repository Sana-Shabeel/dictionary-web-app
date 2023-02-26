import {
  Box,
  Button,
  Divider,
  Flex,
  Image,
  List,
  ListIcon,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { FontContext, FontContextType } from "../../App";
import { Root } from "../../model";
import Meaning from "./MeaningList";

interface Props {
  data: Root;
}

const DisplayData = ({ data }: Props) => {
  const [{ word, phonetics, meanings, sourceUrls }] = data;
  const [isDisabled, setIsDisabled] = useState(false);
  // const [playAudio, setPlayAudio] = useState();

  // console.log("phonetics", phonetics);

  // font family
  const font = useContext<FontContextType>(FontContext);

  // play audio
  const playAudio = (audioLink: string | undefined) => {
    console.log(audioLink);

    if (audioLink) {
      const audio = new Audio(audioLink);
      audio.play();
    }
  };

  // return the object with audio or just the text
  const [{ text }] = phonetics;
  const withAudio = phonetics.find(({ audio }) => audio);

  // play button
  useEffect(() => {
    if (!withAudio?.audio) {
      setIsDisabled(true);
    }
  }, [data]);

  console.log("text", phonetics);
  console.log("audio", withAudio);

  console.log(isDisabled);

  return (
    <Box mt="2em" fontFamily={font.selected.fontFamily}>
      <Flex justifyContent="space-between" alignItems="center">
        <Box>
          <Text fontSize={{ base: "2rem", md: "4rem" }} fontWeight="bold">
            {word}
          </Text>
          <Text color="purple" fontSize="1.5rem">
            {text}
          </Text>
        </Box>
        <button
          className="btn-play"
          disabled={isDisabled}
          onClick={() => playAudio(withAudio?.audio)}
        >
          <Image
            width={{ base: "48px", md: "80px" }}
            src="/public/images/icon-play.svg"
            alt="play icon"
          />
        </button>
      </Flex>

      {meanings.map((meaning) => (
        <Meaning meaning={meaning} />
      ))}
    </Box>
  );
};

export default DisplayData;
