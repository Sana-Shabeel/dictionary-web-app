import { extendTheme, useColorModeValue } from "@chakra-ui/react";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";
import { mode } from "@chakra-ui/theme-tools";

import { switchTheme } from "./switchTheme";

const theme = {
  config: {
    intialColorMode: "light",
    useSystemColorMode: false,
  },
  colors: {
    input: "#f4f4f4",
    lightGray: "#e9e9e9",
    darkGray: "#757575",
    purple: "#a445ed",
    lightBlack: "#2d2d2d",
    darkerBlack: "#1F1F1F",
    veryBlack: "#050505",
    lineGray: "#3a3a3a",
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode("#fff", "#050505")(props),
        color: mode("#2d2d2d", "#fff")(props),
      },
    }),
  },
  components: {
    Switch: switchTheme,
  },
};

export default extendTheme(theme);
