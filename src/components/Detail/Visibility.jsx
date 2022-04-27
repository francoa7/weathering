import { Stack, Text } from '@chakra-ui/react'
import React from 'react'

function Visibility({ weather }) {
      return (
            <Stack bg="brand.ocBl" width="20vw">
                  <Text>Visibility</Text>
                  <Text>{`${(weather.visibility / 1000)}km`}</Text>
            </Stack>)
}

export default Visibility