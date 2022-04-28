import { Progress, Stack, Text, Box } from '@chakra-ui/react'
import React from 'react'

function Humidity({ weather }) {
      return (

            <Stack
                  justifyContent="center"
                  borderRadius="10px"
                  minH={{ sm: "170px", md: "135px" }}
                  m="0 !important"
                  width="40%"
                  bg="brand.ocBl"
                  padding="1rem 2rem">
                  <Stack width="100%"
                        alignItems="center">
                        <Text
                              textAlign="center"
                              fontSize="1.5rem"
                              fontWeight={900}
                        >Humidity</Text>
                        <Text>{weather.main.humidity}%</Text>
                  </Stack>
                  <Progress value={weather.main.humidity} colorScheme="red" borderRadius="20px" />
            </Stack>
      )
}

export default Humidity