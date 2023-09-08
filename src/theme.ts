import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    light: {
      background: "hsl(0, 0%, 98%)",
      text: "hsl(200, 15%, 8%)",
    },
    dark: {
      background: "hsl(209, 23%, 22%)",
      text: "hsl(0, 0%, 100%)",
    },
  },
  transition: "background-color 0.3s, color 0.3s",
});

export default theme;
