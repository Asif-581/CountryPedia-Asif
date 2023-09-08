import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { Card, CardBody, Image, Text } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
const CountryCard = ({ country }) => {
    const textColor = useColorModeValue("light.text", "dark.text");
    return (_jsx(Box, { children: _jsx(Link, { to: `/country/${country.cca3}`, children: _jsx(Card, { boxShadow: "md", height: { lg: "auto", sm: "600px" }, children: _jsxs(CardBody, { padding: "0px", children: [_jsx(Box, { position: "relative", width: "100%", paddingBottom: "50%" // Set a 1:2 aspect ratio (width:height)
                            , children: _jsx(Image, { src: country.flags.svg, alt: country.name.common, objectFit: "cover" // Maintain aspect ratio and cover container
                                , position: "absolute", width: "100%", height: "100%" }) }), _jsxs(Box, { padding: { lg: "20px", md: "20px", sm: "40px" }, marginTop: "10px", children: [_jsx(Text, { fontSize: { lg: "2xl", md: "2xl", sm: "5xl" }, fontWeight: "bold", marginBottom: "10px", children: country.name.common }), _jsxs(Box, { marginBottom: { lg: "20px", md: "20px", sm: "40px" }, children: [_jsxs(Text, { fontWeight: "bold", color: textColor, fontSize: { lg: "16px", md: "16px", sm: "3xl" }, children: ["Population :", " ", _jsx("span", { style: { color: "grey" }, children: country.population })] }), _jsxs(Text, { fontWeight: "bold", color: textColor, fontSize: { lg: "16px", md: "16px", sm: "3xl" }, children: ["Region :", " ", _jsx("span", { style: { color: "grey" }, children: country.region })] }), _jsxs(Text, { fontWeight: "bold", color: textColor, fontSize: { lg: "16px", md: "16px", sm: "3xl" }, children: ["Capital :", " ", _jsx("span", { style: { color: "grey" }, children: country.capital })] })] })] })] }) }) }) }));
};
export default CountryCard;
