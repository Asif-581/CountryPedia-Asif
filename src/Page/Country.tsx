import { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import { useGlobalContext } from "../context/context";
import {
  Box,
  Button,
  Image,
  Text,
  Spinner,
  useColorModeValue,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import axios from "axios";

type NativeName = {
  common: string;
};

type currencyType = {
  name: string;
};



const Country = () => {
  const { countryName, setCountryName, countryCode } =
    useGlobalContext();
  
  const bgColor = useColorModeValue("light.background", "dark.background");
  const textColor = useColorModeValue("light.text", "dark.text");

  const { cca3: code } = useParams();

  const navigate = useNavigate();

  const fetchCountryName = async () => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/alpha/${code}`
      );
      setCountryName(response.data);
    } catch (error) {
      console.error("Error fetching country data:", error);
    }
  };

  useEffect(() => {
    fetchCountryName();
  }, [code]);



  if (countryName.length === 0) {
    return (
      <Box
        h="100vh"
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Spinner size="xl" h="400px" />
      </Box>
    );
  }

  const [countryObject] = countryName;

  console.log(countryObject);
  const common = countryObject.name?.common || "Country Name Not Available";
  const nativeNameSqiCommon: string = countryObject.name.nativeName
    ? typeof countryObject.name.nativeName === "object"
      ? Object.values(countryObject.name.nativeName as NativeName[])
          .map((nl: NativeName) => nl.common)
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
  const tld = countryObject.tld ? countryObject.tld[0] : "TLD Not Available";

  const currencies = countryObject.currencies
    ? typeof countryObject.currencies === "object"
      ? Object.values(
          Object.values(countryObject.currencies as currencyType[])
        ).map((currency: currencyType) => currency.name).join(' |')
      : countryObject.currencies
    : "currencies N/A";

  console.log(Object.values(Object.values(countryObject.currencies)));
  const languages: string = countryObject.languages
    ? typeof countryObject.languages === "object"
      ? Object.values(countryObject.languages).join(" | ")
      : countryObject.languages
    : "Languages Not Available";

  const flagsSvg = countryObject.flags.svg || "";

  const borders = countryObject.borders || [];

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const buttonValue = e.currentTarget.getAttribute("data-value");

    navigate(`/country/${buttonValue}`);
  };

  
  console.log(countryCode);
  return (
    <Box margin="80px" marginTop="50px">
      <Link to="/">
        <Button
          width={{ lg: "120px", md: "120px", sm: "150px" }}
          shadow="md"
          bgColor={bgColor}
          fontSize={{ lg: "auto", md: "auto", sm: "20px" }}
        >
          <ArrowBackIcon marginRight="10px" /> Back
        </Button>
      </Link>
      

      <Box
        display="flex"
        flexDirection={{ lg: "row", md: "row", sm: "column" }}
        gap={{ lg: "100px", md: "100px", sm: "80px" }}
        marginTop="40px"
        width={{ lg: "100%", sm: "auto" }}
        h="400px"
      >
        <Box w={{ lg: "40%", md: "40%", sm: "100%" }}>
          <Image
            src={flagsSvg} // Use optional chaining to prevent errors
            objectFit={{ lg: "cover", md: "cover", sm: "cover" }}
            w={{ lg: "100%", md: "100%", sm: "100%" }}
            h={{ lg: "100%", md: "100%", sm: "100%" }}
          />
        </Box>
        <Box w={{ lg: "40%", md: "40%", sm: "550px" }}>
          <Text
            fontSize={{ lg: "2xl", md: "2xl", sm: "5xl" }}
            fontWeight="bold"
            margin="20px"
            marginLeft="0px"
          >
            {common}
          </Text>
          <Box
            display="flex"
            flexDirection={{ lg: "row", md: "row", sm: "column" }}
            justifyContent="space-between"
            height={{ lg: "200px", md: "200px", sm: "500px" }}
          >
            {/* Check for existence of properties */}
            <Box display="flex" flexDirection="column" gap="10px">
              <Text
                color={textColor}
                fontWeight="bold"
                fontSize={{ lg: "16px", md: "16px", sm: "3xl" }}
              >
                Native Name :{" "}
                <span style={{ color: "GrayText", fontWeight: "normal" }}>
                  {nativeNameSqiCommon}
                </span>
              </Text>
              <Text
                color={textColor}
                fontWeight="bold"
                fontSize={{ lg: "16px", md: "16px", sm: "3xl" }}
              >
                Population :{" "}
                <span style={{ color: "GrayText", fontWeight: "normal" }}>
                  {population}
                </span>
              </Text>
              <Text
                color={textColor}
                fontWeight="bold"
                fontSize={{ lg: "16px", md: "16px", sm: "3xl" }}
              >
                Region :{" "}
                <span style={{ color: "GrayText", fontWeight: "normal" }}>
                  {region}
                </span>
              </Text>
              <Text
                color={textColor}
                fontWeight="bold"
                fontSize={{ lg: "16px", md: "16px", sm: "3xl" }}
              >
                Sub-Region :{" "}
                <span style={{ color: "GrayText", fontWeight: "normal" }}>
                  {subregion}
                </span>
              </Text>
              <Text
                color={textColor}
                fontWeight="bold"
                fontSize={{ lg: "16px", md: "16px", sm: "3xl" }}
              >
                Capital :{" "}
                <span style={{ color: "GrayText", fontWeight: "normal" }}>
                  {capital}
                </span>
              </Text>
            </Box>
            <Box display="flex" flexDirection="column" gap="10px">
              <Text
                color={textColor}
                fontWeight="bold"
                fontSize={{ lg: "16px", md: "16px", sm: "3xl" }}
              >
                Top Level Domain :{" "}
                <span style={{ color: "GrayText", fontWeight: "normal" }}>
                  {tld}
                </span>
              </Text>
              <Text
                color={textColor}
                fontWeight="bold"
                fontSize={{ lg: "16px", md: "16px", sm: "3xl" }}
              >
                Currencies :{" "}
                <span style={{ color: "GrayText", fontWeight: "normal" }}>
                  {currencies}
                </span>
              </Text>
              <Text
                color={textColor}
                fontWeight="bold"
                fontSize={{ lg: "16px", md: "16px", sm: "3xl" }}
              >
                Languages :{" "}
                <span style={{ color: "GrayText", fontWeight: "normal" }}>
                  {languages}
                </span>
              </Text>
            </Box>
          </Box>
          <Text
            marginTop="30px"
            color={textColor}
            fontWeight="bold"
            fontSize={{ lg: "16px", md: "16px", sm: "3xl" }}
          >
            Border Countries :
            {borders.length > 0 ? (
              borders.map((border: string) => (
                <Button
                  type="button"
                  key={border}
                  marginRight="10px"
                  marginLeft="10px"
                  marginBottom={{ lg: "10px", md: "10px", sm: "30px" }}
                  data-value={border}
                  onClick={handleClick}
                  fontSize={{ lg: "16px", md: "16px", sm: "3xl" }}
                >
                  {border}
                </Button>
              ))
            ) : (
              <span
                style={{
                  color: "GrayText",
                  fontWeight: "normal",
                  marginLeft: "10px",
                }}
              >
                Borders not Available
              </span>
            )}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Country;
