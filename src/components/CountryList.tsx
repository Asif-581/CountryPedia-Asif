import { Box,Text ,useColorModeValue} from "@chakra-ui/react";
import { Input, InputLeftElement, InputGroup } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Select } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { useGlobalContext } from "../context/context";
import CountryCard from "./CountryCard";
import { Country } from "../context/context";
import { useEffect } from "react";

export interface Countrydata extends Country {
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
const CountryList = () => {
  const {
    countries,
    searchCountry,
    setSearchCountry,
    searchText,
    setSearchText,

  } = useGlobalContext();


const bgColor = useColorModeValue("light.background", "dark.background");




  countries.sort((a: any, b: any) => {
    const name1 = a.name.common;
    const name2 = b.name.common;
    if (name1 < name2) {
      return -1;
    } else if (name1 > name2) {
      return 1;
    } else {
      return 0;
    }
  });
  // console.log(countries)

  useEffect(() => {
    // Initialize the filtered countries with all countries when the component mounts
    setSearchCountry(countries);
  }, [countries, setSearchCountry]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = e.target.value;
    setSearchText(inputText);

    if (inputText === "") {
      // Reset to display all countries
      setSearchCountry(countries);
    } else {
      // Filter the countries based on the search input
      const filteredCountries = countries.filter((country) => {
        return country.name.common
          .toLowerCase()
          .includes(inputText.toLowerCase());
      });

      setSearchCountry(filteredCountries);
    }
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // setSearchByRegion(e.target.value);
    if (e.target.value === 'All') {
      setSearchCountry(countries);
      return
   }
    const filterRegion = countries.filter((country) =>
      country.continents.some((c:string) => c.includes(e.target.value)))
    setSearchCountry(filterRegion)
  }



 
  return (
    <Box margin={{ lg: "80px", md: "80px", sm: "60px" }} marginTop="50px">
      <Box
        width="100%"
        display="flex"
        flexWrap={{ sm: "wrap", lg: "nowrap", md: "nowrap" }}
      >
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            textAlign="center"
            padding="25px"
          >
            <SearchIcon color="gray.500" fontSize="20px" />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Search for a country"
            width={{ lg: "35%", md: "35%", sm: "100%" }}
            fontSize="20px"
            padding="25px"
            marginLeft="10px"
            boxShadow="md"
            value={searchText}
            onChange={handleChange}
            bg={
              bgColor === "dark.background"
                ? "hsl(207, 26%, 17%)"
                : "hsl(0, 0%, 98%)"
            }
          />
        </InputGroup>
        <Select
          width={{ lg: "12%", md: "12%", sm: "50%" }}
          height="50px"
          boxShadow="md"
          onChange={handleSelect}
          marginTop={{ lg: "0px", md: "0px", sm: "50px" }}
          bg={
            bgColor === "dark.background"
              ? "hsl(207, 26%, 17%)"
              : "hsl(0, 0%, 98%)"
          }
        >
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </Select>
      </Box>
      <Box marginTop="40px" >
        <Grid
          templateColumns={{
            lg: "repeat(4, 1fr)",
            md: "repeat(2, 1fr)",
            sm: "repeat(1, 1fr)",
          }}
          gap={16}
        >
          {searchCountry.length > 0 ? (
            searchCountry.map((country, index: number) => (
              <GridItem
                key={index}
                height={{ lg: "auto", md: "auto", sm: "auto" }}
              >
                <CountryCard country={country} />
              </GridItem>
            ))
          ) : (
            <Box display="flex" alignItems="center" justifyContent="center">
              <Text fontSize="3xl">No matching countries found.</Text>
            </Box>
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default CountryList;
