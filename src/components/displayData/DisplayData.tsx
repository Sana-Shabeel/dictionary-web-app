import {
  Box,
  Divider,
  Flex,
  Image,
  List,
  ListIcon,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { FontContext, FontContextType } from "../../App";
import { Root } from "../../model";

interface Props {
  data: Root;
}

const DisplayData = ({ data }: Props) => {
  const [{ word, phonetics, meanings, sourceUrls }] = data;

  console.log(phonetics);

  // font family
  const font = useContext<FontContextType>(FontContext);

  // play audio
  const playAudio = (audioLink: string) => {
    if (audioLink) {
      const audio = new Audio(audioLink);
      audio.play();
    }
  };

  //TODO search word board
  // get the object with the audio
  const [{ text, audio }] = phonetics.filter((item) => item.audio.length !== 0);

  const [noun, verb] = meanings;

  console.log("meanings", noun.partOfSpeech);

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
        <Box>
          <Image
            width={{ base: "3em", md: "5em" }}
            src="/public/images/icon-play.svg"
            onClick={() => playAudio(audio)}
            cursor="pointer"
            alt="play icon"
          />
        </Box>
      </Flex>

      {/* noun */}
      <Flex alignItems="center" mt={5}>
        <Text fontWeight="bold">{noun.partOfSpeech}</Text>
        <Divider ml="1rem" />
      </Flex>

      <Text>Meaning</Text>
      <List variant="custom">
        {noun.definitions.map(({ definition, example }) => (
          <>
            <ListItem fontSize={{ base: "1rem", md: "1.2rem" }}>
              {definition}
            </ListItem>
            <Text
              margin="1em 0"
              color="gray"
              fontSize={{ base: "1rem", md: "1.2rem" }}
            >
              {example ? `"${example}"` : null}
            </Text>
          </>
        ))}
      </List>
    </Box>
  );
};

export default DisplayData;
