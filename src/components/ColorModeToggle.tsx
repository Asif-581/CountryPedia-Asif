import { useColorMode } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      onClick={toggleColorMode}
      aria-label={
        colorMode === "light" ? "Switch to dark mode" : "Switch to light mode"
      }
    />
  );
};

export default ColorModeToggle;
