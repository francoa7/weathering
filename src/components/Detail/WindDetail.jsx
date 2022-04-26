import { Stack, Text } from '@chakra-ui/react'
import React from 'react'

function WindDetail({ weather }) {
      console.log(weather);
      return (
            <Stack bg="brand.ocBl" width="20vw">
                  <Text>Wind status</Text>
                  <Text>{weather.wind.speed}</Text>
                  <Text>{weather.wind.deg}</Text>
            </Stack>
      )
}

export default WindDetail