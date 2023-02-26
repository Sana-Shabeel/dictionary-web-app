import {
  defineStyle,
  createMultiStyleConfigHelpers,
} from "@chakra-ui/styled-system";
import { listAnatomy as parts } from "@chakra-ui/anatomy";
import { mode } from "@chakra-ui/theme-tools";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle((props) => ({
  // define the part you're going to style
  container: {
    listStylePos: "outside", // change listStylePos to inside
    // boxShadow: "md", // change boxShadow to md
    // bg: "rgba(0, 0, 0, 0.6)",
  },
  item: {
    p: 2, // set padding to 2
    "&::marker": {
      // change color for marker
      color: mode("blue.500", "blue.200")(props),
    },
  },
  icon: {
    //change color for icon
    color: mode("blue.500", "blue.200"),
  },
}));

export const listTheme = defineMultiStyleConfig({ baseStyle });
