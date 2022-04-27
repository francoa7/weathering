import { Progress, Stack, Text } from '@chakra-ui/react'
import React from 'react'

function Pressure({ weather }) {
      (weather);
      return (
            <Stack
                  justifyContent="center"
                  minH="120px"
                  m="0 !important"
                  width="40%"
                  bg="brand.ocBl"
                  alignItems="center"
                  padding="1rem 2rem">
                  <Text>Air Pressure</Text>
                  <Text>{weather.main.pressure}</Text>
            </Stack>
      )
}

export default Pressure