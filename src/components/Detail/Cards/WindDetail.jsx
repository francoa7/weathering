import { Stack, Text } from '@chakra-ui/react'
import React from 'react'

function WindDetail({ weather }) {
      return (
            <Stack
                  justifyContent="center"
                  borderRadius="10px"
                  minH="135px"
                  m="0 !important"
                  width="40%"
                  bg="brand.ocBl"
                  alignItems="center"
                  padding="1rem 2rem">
                  <Text fontSize="1.5rem" fontWeight={900}>Wind status</Text>
                  <Text>{weather.wind.speed} m/s</Text>
                  <Text>{weather.wind.deg}°</Text>
            </Stack>
      )
}

export default WindDetail