import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import { FontContext, FontContextType } from "../../App";

const menuItems = [
  { title: "Serif", fontFamily: "'Lora', serif" },
  { title: "Sans Serif", fontFamily: "'Inter', sans-serif" },
  { title: "Monospace", fontFamily: "'Space Mono', monospace" },
];

const DropDown = () => {
  // get values from context

  const { selected, setSelected } = useContext<FontContextType>(FontContext);

  console.log(selected);

  return (
    <Menu>
      <MenuButton>
        <Flex justifyContent={"space-between"} alignItems="center" gap={2}>
          <Text fontFamily={selected.fontFamily} fontWeight="700">
            {selected.title}
          </Text>
          <ChevronDownIcon color={"blue.400"} fontSize="2rem" />
        </Flex>
      </MenuButton>
      <MenuList>
        {menuItems.map((item, idx) => (
          <MenuItem
            key={idx}
            fontFamily={item.fontFamily}
            fontWeight="700"
            bg="inherit"
            onClick={(e) => setSelected(item)}
            _hover={{ background: "transparent", color: "gray.200" }}
            _focus={{ background: "transparent", color: "purple" }}
          >
            {item.title}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default DropDown;
