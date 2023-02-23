import React, { useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const menuItems = [
  { title: "Sans Serif", fontFamily: "'Inter', sans-serif" },
  { title: "Serif", fontFamily: "'Lora', serif" },
  { title: "Monospace", fontFamily: "'Space Mono', monospace" },
];

const DropDown = () => {
  const [selected, setSelected] = useState({
    title: "Sans serif",
    fontFamily: "'Inter', sans-serif",
  });
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
