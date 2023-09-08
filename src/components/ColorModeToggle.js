import { jsx as _jsx } from "react/jsx-runtime";
import { useColorMode } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
const ColorModeToggle = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (_jsx(IconButton, { icon: colorMode === "light" ? _jsx(MoonIcon, {}) : _jsx(SunIcon, {}), onClick: toggleColorMode, "aria-label": colorMode === "light" ? "Switch to dark mode" : "Switch to light mode" }));
};
export default ColorModeToggle;
