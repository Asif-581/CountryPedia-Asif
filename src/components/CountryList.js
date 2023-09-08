import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { Input, InputLeftElement, InputGroup } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Select } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { useGlobalContext } from "../context/context";
import CountryCard from "./CountryCard";
import { useEffect } from "react";
const CountryList = () => {
    const { countries, searchCountry, setSearchCountry, searchText, setSearchText, } = useGlobalContext();
    const bgColor = useColorModeValue("light.background", "dark.background");
    countries.sort((a, b) => {
        const name1 = a.name.common;
        const name2 = b.name.common;
        if (name1 < name2) {
            return -1;
        }
        else if (name1 > name2) {
            return 1;
        }
        else {
            return 0;
        }
    });
    // console.log(countries)
    useEffect(() => {
        // Initialize the filtered countries with all countries when the component mounts
        setSearchCountry(countries);
    }, [countries, setSearchCountry]);
    const handleChange = (e) => {
        const inputText = e.target.value;
        setSearchText(inputText);
        if (inputText === "") {
            // Reset to display all countries
            setSearchCountry(countries);
        }
        else {
            // Filter the countries based on the search input
            const filteredCountries = countries.filter((country) => {
                return country.name.common
                    .toLowerCase()
                    .includes(inputText.toLowerCase());
            });
            setSearchCountry(filteredCountries);
        }
    };
    const handleSelect = (e) => {
        // setSearchByRegion(e.target.value);
        if (e.target.value === 'All') {
            setSearchCountry(countries);
            return;
        }
        const filterRegion = countries.filter((country) => country.continents.some((c) => c.includes(e.target.value)));
        setSearchCountry(filterRegion);
    };
    return (_jsxs(Box, { margin: { lg: "80px", md: "80px", sm: "60px" }, marginTop: "50px", children: [_jsxs(Box, { width: "100%", display: "flex", flexWrap: { sm: "wrap", lg: "nowrap", md: "nowrap" }, children: [_jsxs(InputGroup, { children: [_jsx(InputLeftElement, { pointerEvents: "none", textAlign: "center", padding: "25px", children: _jsx(SearchIcon, { color: "gray.500", fontSize: "20px" }) }), _jsx(Input, { type: "text", placeholder: "Search for a country", width: { lg: "35%", md: "35%", sm: "100%" }, fontSize: "20px", padding: "25px", marginLeft: "10px", boxShadow: "md", value: searchText, onChange: handleChange, bg: bgColor === "dark.background"
                                    ? "hsl(207, 26%, 17%)"
                                    : "hsl(0, 0%, 98%)" })] }), _jsxs(Select, { width: { lg: "12%", md: "12%", sm: "50%" }, height: "50px", boxShadow: "md", onChange: handleSelect, marginTop: { lg: "0px", md: "0px", sm: "50px" }, bg: bgColor === "dark.background"
                            ? "hsl(207, 26%, 17%)"
                            : "hsl(0, 0%, 98%)", children: [_jsx("option", { value: "All", children: "All" }), _jsx("option", { value: "Africa", children: "Africa" }), _jsx("option", { value: "America", children: "America" }), _jsx("option", { value: "Asia", children: "Asia" }), _jsx("option", { value: "Europe", children: "Europe" }), _jsx("option", { value: "Oceania", children: "Oceania" })] })] }), _jsx(Box, { marginTop: "40px", children: _jsx(Grid, { templateColumns: {
                        lg: "repeat(4, 1fr)",
                        md: "repeat(2, 1fr)",
                        sm: "repeat(1, 1fr)",
                    }, gap: 16, children: searchCountry.length > 0 ? (searchCountry.map((country, index) => (_jsx(GridItem, { height: { lg: "auto", md: "auto", sm: "auto" }, children: _jsx(CountryCard, { country: country }) }, index)))) : (_jsx(Box, { display: "flex", alignItems: "center", justifyContent: "center", children: _jsx(Text, { fontSize: "3xl", children: "No matching countries found." }) })) }) })] }));
};
export default CountryList;
