import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import ColorModeToggle from "./ColorModeToggle";
const Navbar = () => {
    const bgColor = useColorModeValue("light.background", "dark.background");
    const textColor = useColorModeValue("light.text", "dark.text");
    return (_jsx(Box, { display: "flex", justifyContent: "space-between", width: { sm: "100%" }, boxShadow: "md", rounded: "md", bg: bgColor === "dark.background" ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)", color: textColor, transition: "background-color 0.3s, color 0.3s", children: _jsxs(Box, { width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", marginLeft: { lg: "80px", md: "80px", sm: "60px" }, marginRight: { lg: "80px", md: "80px", sm: "60px" }, height: { lg: "80px", md: "80px", sm: "100px" }, children: [_jsx(Text, { fontSize: { lg: "3xl", md: "3xl", sm: "2xl" }, fontWeight: "extrabold", children: "Where in the world?" }), _jsxs(Box, { display: "flex", padding: "10px", alignItems: "center", children: [_jsx(ColorModeToggle, {}), _jsx(Text, { marginLeft: "10px", children: bgColor === "dark.background" ? "Light Mode" : "Dark Mode" })] })] }) }));
};
export default Navbar;
