import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import { Box, Button, Image, Text, Spinner, useColorModeValue, } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import axios from "axios";
const Country = () => {
    const { countryName, setCountryName, countryCode } = useGlobalContext();
    const bgColor = useColorModeValue("light.background", "dark.background");
    const textColor = useColorModeValue("light.text", "dark.text");
    const { cca3: code } = useParams();
    const navigate = useNavigate();
    const fetchCountryName = async () => {
        try {
            const response = await axios.get(`https://restcountries.com/v3.1/alpha/${code}`);
            setCountryName(response.data);
        }
        catch (error) {
            console.error("Error fetching country data:", error);
        }
    };
    useEffect(() => {
        fetchCountryName();
    }, [code]);
    if (countryName.length === 0) {
        return (_jsx(Box, { h: "100vh", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", children: _jsx(Spinner, { size: "xl", h: "400px" }) }));
    }
    const [countryObject] = countryName;
    console.log(countryObject);
    const common = countryObject.name?.common || "Country Name Not Available";
    const nativeNameSqiCommon = countryObject.name.nativeName
        ? typeof countryObject.name.nativeName === "object"
            ? Object.values(countryObject.name.nativeName)
                .map((nl) => nl.common)
                .join(" | ")
            : countryObject.name.nativeName
        : countryObject.name
            ? countryObject.name.common
            : "N/A";
    console.log(Object.values(countryObject.name.nativeName));
    const population = countryObject.population || "Not Available";
    const region = countryObject.region || "Region Not Available";
    const subregion = countryObject.subregion || "Subregion Not Available";
    const capital = countryObject.capital?.[0] || "Capital Not Available";
    const tld = countryObject.tld?.[0] || "TLD Not Available";
    const currencies = countryObject.currencies
        ? typeof countryObject.currencies === "object"
            ? Object.values(Object.values(countryObject.currencies)).map((currency) => currency.name)
            : countryObject.currencies
        : "currencies N/A";
    console.log(Object.values(Object.values(countryObject.currencies)));
    const languages = countryObject.languages
        ? typeof countryObject.languages === "object"
            ? Object.values(countryObject.languages).join(" | ")
            : countryObject.languages
        : "Languages Not Available";
    const flagsSvg = countryObject.flags.svg || "";
    const borders = countryObject.borders || [];
    const handleClick = (e) => {
        const buttonValue = e.currentTarget.getAttribute("data-value");
        navigate(`/country/${buttonValue}`);
    };
    console.log(countryCode);
    return (_jsxs(Box, { margin: "80px", marginTop: "50px", children: [_jsx(Link, { to: "/", children: _jsxs(Button, { width: { lg: "120px", md: "120px", sm: "150px" }, shadow: "md", bgColor: bgColor, fontSize: { lg: "auto", md: "auto", sm: "20px" }, children: [_jsx(ArrowBackIcon, { marginRight: "10px" }), " Back"] }) }), _jsxs(Box, { display: "flex", flexDirection: { lg: "row", md: "row", sm: "column" }, gap: { lg: "100px", md: "100px", sm: "80px" }, marginTop: "40px", width: { lg: "100%", sm: "auto" }, h: "400px", children: [_jsx(Box, { w: { lg: "40%", md: "40%", sm: "100%" }, children: _jsx(Image, { src: flagsSvg, objectFit: { lg: "cover", md: "cover", sm: "cover" }, w: { lg: "100%", md: "100%", sm: "100%" }, h: { lg: "100%", md: "100%", sm: "100%" } }) }), _jsxs(Box, { w: { lg: "40%", md: "40%", sm: "550px" }, children: [_jsx(Text, { fontSize: { lg: "2xl", md: "2xl", sm: "5xl" }, fontWeight: "bold", margin: "20px", marginLeft: "0px", children: common }), _jsxs(Box, { display: "flex", flexDirection: { lg: "row", md: "row", sm: "column" }, justifyContent: "space-between", height: { lg: "200px", md: "200px", sm: "500px" }, children: [_jsxs(Box, { display: "flex", flexDirection: "column", gap: "10px", children: [_jsxs(Text, { color: textColor, fontWeight: "bold", fontSize: { lg: "16px", md: "16px", sm: "3xl" }, children: ["Native Name :", " ", _jsx("span", { style: { color: "GrayText", fontWeight: "normal" }, children: nativeNameSqiCommon })] }), _jsxs(Text, { color: textColor, fontWeight: "bold", fontSize: { lg: "16px", md: "16px", sm: "3xl" }, children: ["Population :", " ", _jsx("span", { style: { color: "GrayText", fontWeight: "normal" }, children: population })] }), _jsxs(Text, { color: textColor, fontWeight: "bold", fontSize: { lg: "16px", md: "16px", sm: "3xl" }, children: ["Region :", " ", _jsx("span", { style: { color: "GrayText", fontWeight: "normal" }, children: region })] }), _jsxs(Text, { color: textColor, fontWeight: "bold", fontSize: { lg: "16px", md: "16px", sm: "3xl" }, children: ["Sub-Region :", " ", _jsx("span", { style: { color: "GrayText", fontWeight: "normal" }, children: subregion })] }), _jsxs(Text, { color: textColor, fontWeight: "bold", fontSize: { lg: "16px", md: "16px", sm: "3xl" }, children: ["Capital :", " ", _jsx("span", { style: { color: "GrayText", fontWeight: "normal" }, children: capital })] })] }), _jsxs(Box, { display: "flex", flexDirection: "column", gap: "10px", children: [_jsxs(Text, { color: textColor, fontWeight: "bold", fontSize: { lg: "16px", md: "16px", sm: "3xl" }, children: ["Top Level Domain :", " ", _jsx("span", { style: { color: "GrayText", fontWeight: "normal" }, children: tld })] }), _jsxs(Text, { color: textColor, fontWeight: "bold", fontSize: { lg: "16px", md: "16px", sm: "3xl" }, children: ["Currencies :", " ", _jsx("span", { style: { color: "GrayText", fontWeight: "normal" }, children: currencies })] }), _jsxs(Text, { color: textColor, fontWeight: "bold", fontSize: { lg: "16px", md: "16px", sm: "3xl" }, children: ["Languages :", " ", _jsx("span", { style: { color: "GrayText", fontWeight: "normal" }, children: languages })] })] })] }), _jsxs(Text, { marginTop: "30px", color: textColor, fontWeight: "bold", fontSize: { lg: "16px", md: "16px", sm: "3xl" }, children: ["Border Countries :", borders.length > 0 ? (borders.map((border) => (_jsx(Button, { type: "button", marginRight: "10px", marginLeft: "10px", marginBottom: { lg: "10px", md: "10px", sm: "30px" }, "data-value": border, onClick: handleClick, fontSize: { lg: "16px", md: "16px", sm: "3xl" }, children: border }, border)))) : (_jsx("span", { style: {
                                            color: "GrayText",
                                            fontWeight: "normal",
                                            marginLeft: "10px",
                                        }, children: "Borders not Available" }))] })] })] })] }));
};
export default Country;
