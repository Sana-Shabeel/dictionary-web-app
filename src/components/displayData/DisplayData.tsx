import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Divider,
  Flex,
  Image,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { FontContext, FontContextType } from "../../App";
import { Root } from "../../model";
import Meaning from "./MeaningList";

interface Props {
  data: Root;
}

const DisplayData = ({ data }: Props) => {
  const [{ word, phonetics, meanings, sourceUrls }] = data;
  const [isDisabled, setIsDisabled] = useState(false);
  const color = useColorModeValue("black", "white");
  console.log(data);

  // font family
  const font = useContext<FontContextType>(FontContext);

  // play audio
  const playAudio = (audioLink: string | undefined) => {
    if (audioLink) {
      const audio = new Audio(audioLink);
      audio.play();
    }
  };

  const withAudio = phonetics.find(({ audio }) => audio);

  // play button
  useEffect(() => {
    if (withAudio?.audio === undefined) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [data]);

  return (
    <Box mt="2em" fontFamily={font.selected.fontFamily}>
      <Flex justifyContent="space-between" alignItems="center">
        <Box>
          <Text fontSize={{ base: "2rem", md: "4rem" }} fontWeight="bold">
            {word}
          </Text>
          {/* phonetics could potentially be an empty array so destructuring the arrayb would throw an error that could break the site */}
          {phonetics.length > 0 ? (
            <Text color="purple" fontSize="1.5rem">
              {Object.values(phonetics)[0].text}
            </Text>
          ) : null}
        </Box>
        <button
          className="btn-play"
          disabled={isDisabled}
          onClick={() => playAudio(withAudio?.audio)}
        >
          <Image
            width={{ base: "48px", md: "80px" }}
            src="/images/icon-play.svg"
            alt="play icon"
          />
        </button>
      </Flex>

      {meanings.map((meaning, idx) => (
        <Meaning key={idx} meaning={meaning} />
      ))}

      {/* source */}
      <Divider mt="2rem" />
      <Flex
        alignItems={{ base: "flex-start", md: "center" }}
        gap="1rem"
        margin="1rem 0 3rem 1rem"
      >
        <Text fontSize="0.9rem" color="teal.500">
          Source
        </Text>
        <Link
          mr={"1rem"}
          color={{ color: color }}
          href="#"
          fontSize="0.8rem"
          overflow={"hidden"}
        >
          {sourceUrls[0]}
          <ExternalLinkIcon mx="2px" />
        </Link>
      </Flex>
    </Box>
  );
};

export default DisplayData;
