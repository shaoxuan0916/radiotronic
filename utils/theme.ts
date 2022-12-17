import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    100: "#D8DFF9",
    // 200: "#27EF96",
    300: "#B4BFE3",
    // 400: "#0EBE6F",
    500: "#8595CE",
    // 600: "#0A864F",
    700: "#4B5F93",
    // 800: "#075C37",
    900: "#203068"
  }
};

const customTheme = extendTheme({ colors });

export default customTheme;