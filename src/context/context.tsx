import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
  useEffect,
} from "react";
import { Box, Spinner } from "@chakra-ui/react";
import axios from "axios";


export interface Country {
  name: {
    common: string;
    nativeName: string;
  };
  subregion: string;
  population: number;
  capital: string;
  flags: {
    svg: string;
  };
  region: string;
  currencies: string;
  languages: string;
  borders: string[];
  tld: string[];
  continents: string[];
  cca3: string;
}
interface ContextType {
  countries: Country[];
  setCountries: Dispatch<SetStateAction<Country[]>>;
  countryName: Country[];
  setCountryName: Dispatch<SetStateAction<Country[]>>;
  countryCode: string;
  setCountryCode: Dispatch<SetStateAction<string>>;
  loading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  searchCountry: Country[];
  setSearchCountry: Dispatch<SetStateAction<Country[]>>;
  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
  
}


interface AppProviderProps {
  children: ReactNode;
}

const AppContext = createContext< ContextType | undefined >(undefined);

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [countryName, setCountryName] = useState<Country[]>([]);
  
  const [countryCode, setCountryCode] = useState<string>('');
  const [loading, setIsLoading] = useState<boolean>(true);
  const [searchCountry, setSearchCountry] = useState<Country[]>([]);
  const [searchText, setSearchText] = useState<string>('');
  
  


  const fetchCountry = async () => {
    
    const data = await axios.get("https://restcountries.com/v3.1/all");
    setCountries(data.data)
    setIsLoading(false)
}


  useEffect(() => {
    fetchCountry();
  },[])

  if (loading) {

    return (
      <Box h='100vh' width='100%' display='flex' alignItems='center' justifyContent='center'>
        <Spinner size="xl" h='500px'/>
      </Box>
    );
}

  return (
    <AppContext.Provider
      value={{
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
       
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(
      "useGlobalContext has to be used within <AppContext.Provider>"
    );
  }
  return context;
}
