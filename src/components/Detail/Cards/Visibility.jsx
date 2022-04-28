import { Stack, Text } from '@chakra-ui/react'
import React from 'react'

function Visibility({ weather }) {
      return (
            <Stack
                  justifyContent="center"
                  borderRadius="10px"
                  minH={{ base: "150px", md: "135px" }}
                  m="0 !important"
                  width="40%"
                  bg="brand.ocBl"
                  alignItems="center"
                  padding={{ base: ".5rem", md: "1rem 2rem" }}>
                  <Text
                        textAlign="center"
                        fontSize={{ base: "1rem", md: "1.5rem" }} fontWeight={900}
                  >Visibility</Text>
                  <Text>{`${(weather.visibility / 1000)} km`}</Text>
            </Stack>)
}

export default Visibility