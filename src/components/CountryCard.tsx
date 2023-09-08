import { Box,useColorModeValue} from "@chakra-ui/react";

import { Card, CardBody, Image,Text } from "@chakra-ui/react";
import { Countrydata } from "./CountryList";
import {Link} from 'react-router-dom'
interface CountryProp {
  country: Countrydata;
}

const CountryCard: React.FC<CountryProp> = ({ country }) => {
      const textColor = useColorModeValue("light.text", "dark.text");
  
  return (
    <Box>
      <Link to={`/country/${country.cca3}`}>
        <Card boxShadow="md" height={{ lg: "auto", sm: "600px" }}>
          <CardBody padding="0px">
            <Box
              position="relative"
              width="100%"
              paddingBottom="50%" // Set a 1:2 aspect ratio (width:height)
            >
              <Image
                src={country.flags.svg}
                alt={country.name.common}
                objectFit="cover" // Maintain aspect ratio and cover container
                position="absolute"
                width="100%"
                height="100%"
              />
            </Box>
            {/* Other content for the card */}
            <Box padding={{lg: "20px",md:"20px",sm:"40px"}} marginTop="10px">
              <Text
                fontSize={{ lg: "2xl", md: "2xl", sm: "5xl" }}
                fontWeight="bold"
                marginBottom="10px"
                
              >
                {country.name.common}
              </Text>
              <Box marginBottom={{ lg:"20px",md:"20px",sm:"40px"}}>
                <Text
                  fontWeight="bold"
                  color={textColor}
                  fontSize={{ lg: "16px", md: "16px", sm: "3xl" }}
                >
                  Population :{" "}
                  <span style={{ color: "grey" }}>{country.population}</span>
                </Text>
                <Text
                  fontWeight="bold"
                  color={textColor}
                  fontSize={{ lg: "16px", md: "16px", sm: "3xl" }}
                >
                  Region :{" "}
                  <span style={{ color: "grey" }}>{country.region}</span>
                </Text>
                <Text
                  fontWeight="bold"
                  color={textColor}
                  fontSize={{ lg: "16px", md: "16px", sm: "3xl" }}
                >
                  Capital :{" "}
                  <span style={{ color: "grey" }}>{country.capital}</span>
                </Text>
              </Box>
            </Box>
          </CardBody>
        </Card>
      </Link>
    </Box>
  );
};

export default CountryCard;
