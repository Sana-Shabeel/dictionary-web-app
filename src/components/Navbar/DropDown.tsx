import React from "react";
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
  return (
    <Menu>
      <MenuButton>
        <Flex justifyContent={"space-between"} alignItems="center" gap={2}>
          <Text>Sans Serif</Text>
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList>
        {menuItems.map(({ title, fontFamily }) => (
          <MenuItem
            fontFamily={fontFamily}
            fontWeight="700"
            _hover={{ background: "transparent", color: "gray.200" }}
            _focus={{ background: "transparent", color: "purple" }}
          >
            {title}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default DropDown;
