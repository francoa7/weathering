import { Progress, Stack, Text } from '@chakra-ui/react'
import React from 'react'

function Humidity({ weather }) {
      return (
            <Stack bg="brand.ocBl" width="20vw">
                  <Text>Humidity</Text>
                  <Text>{weather.main.humidity}</Text>
                  <Progress value={weather.main.humidity} />
            </Stack>
            )
}

export default Humidity