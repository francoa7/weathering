import { Progress, Stack, Text, Box } from '@chakra-ui/react'
import React from 'react'

function Humidity({ weather }) {
      return (

            <Stack
                  justifyContent="center"
                  minH="120px"
                  m="0 !important"
                  width="40%"
                  bg="brand.ocBl"
                  padding="1rem 2rem">
                  <Stack width="100%"
                        alignItems="center">
                        <Text>Humidity</Text>
                        <Text>{weather.main.humidity}</Text>
                  </Stack>
                  <Progress value={weather.main.humidity} />
            </Stack>
      )
}

export default Humidity