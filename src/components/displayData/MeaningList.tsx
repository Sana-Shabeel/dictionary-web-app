import {
  Divider,
  Flex,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/layout";
import { Box } from "@chakra-ui/react";
import { Meaning } from "../../model";

interface Props {
  meaning: Meaning;
}

const MeaningList = ({ meaning }: Props) => {
  return (
    <Box margin={"1rem 0"}>
      <Flex alignItems="center" mt={5}>
        <Text fontWeight="bold">{meaning.partOfSpeech}</Text>
        <Divider ml="1rem" />
      </Flex>

      <Text
        margin="1em 0"
        color="gray"
        fontSize={{ base: "1rem", md: "1.2rem" }}
      >
        Meaning
      </Text>
      <UnorderedList>
        {meaning.definitions.map(({ definition, example }, idx) => (
          <div key={idx}>
            <ListItem fontSize={{ base: "1rem", md: "1.2rem" }}>
              {definition}
            </ListItem>
            <Text color="gray" fontSize={{ base: "1rem", md: "1.2rem" }}>
              {example ? `"${example}"` : null}
            </Text>
          </div>
        ))}
      </UnorderedList>

      {/* Synonyms */}
      {meaning.synonyms.length !== 0 ? (
        <Flex alignItems="center" gap={2} maxWidth="100vw" flexWrap="wrap">
          <Text
            maxWidth="100vw"
            color="gray"
            fontSize={{ base: "1rem", md: "1.2rem" }}
            margin="1rem 0"
          >
            Synonyms
          </Text>

          {meaning.synonyms.map((synonym, idx) => (
            <span key={idx} className="span-synonyms">
              {synonym}
            </span>
          ))}
        </Flex>
      ) : null}
    </Box>
  );
};

export default MeaningList;
