import { Progress, Stack, Text, Box } from '@chakra-ui/react'
import React from 'react'

function Humidity({ weather }) {
      return (

            <Stack
                  justifyContent="center"
                  borderRadius="10px"
                  minH={{ base: "150px", md: "135px" }}
                  m="0 !important"
                  width="40%"
                  bg="brand.ocBl"
                  padding={{ base: ".5rem", md: "1rem 2rem" }}>
                  <Stack width="100%"
                        alignItems="center">
                        <Text
                              textAlign="center"
                              fontSize={{ base: "1rem", md: "1.5rem" }}
                              fontWeight={900}
                        >Humidity</Text>
                        <Text>{weather.main.humidity}%</Text>
                  </Stack>
                  <Progress value={weather.main.humidity} colorScheme="red" borderRadius="20px" />
            </Stack>
      )
}

export default Humidity