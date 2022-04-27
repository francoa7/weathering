import { Progress, Stack, Text } from '@chakra-ui/react'
import React from 'react'

function Pressure({ weather }) {
      (weather);
      return (
            <Stack
                  borderRadius="10px"
                  justifyContent="center"
                  minH="135px"
                  m="0 !important"
                  width="40%"
                  bg="brand.ocBl"
                  alignItems="center"
                  padding="1rem 2rem">
                  <Text fontSize="1.5rem" fontWeight={900}>Air Pressure</Text>
                  <Text>{weather.main.pressure} hPa</Text>
            </Stack>
      )
}

export default Pressure