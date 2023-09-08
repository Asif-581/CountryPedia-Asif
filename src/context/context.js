import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState, useEffect, } from "react";
import { Box, Spinner } from "@chakra-ui/react";
import axios from "axios";
const AppContext = createContext(undefined);
export const AppProvider = ({ children }) => {
    const [countries, setCountries] = useState([]);
    const [countryName, setCountryName] = useState([]);
    const [countryCode, setCountryCode] = useState('');
    const [loading, setIsLoading] = useState(true);
    const [searchCountry, setSearchCountry] = useState("");
    const [searchText, setSearchText] = useState('');
    const fetchCountry = async () => {
        const data = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(data.data);
        setIsLoading(false);
    };
    useEffect(() => {
        fetchCountry();
    }, []);
    if (loading) {
        return (_jsx(Box, { h: '100vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', children: _jsx(Spinner, { size: "xl", h: '500px' }) }));
    }
    return (_jsx(AppContext.Provider, { value: {
            countries,
            setCountries,
            countryName,
            setCountryName,
            countryCode,
            setCountryCode,
            loading,
            setIsLoading,
            searchCountry,
            setSearchCountry,
            searchText,
            setSearchText,
        }, children: children }));
};
export const useGlobalContext = () => {
    return useContext(AppContext);
};
