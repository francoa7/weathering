import React from 'react'
import { Stack, Text } from '@chakra-ui/react'
import WindDetail from './WindDetail'
import Humidity from './Humidity'
import Visibility from './Visibility'

function Detail({ weather }) {
      return (
            <Stack >
                  {weather.main
                        ?
                        <>
                              <WindDetail weather={weather} />
                              <Humidity weather={weather} />
                              <Visibility weather={weather} />
                        </>
                        :
                        <Text>Loading</Text>
                  }

            </Stack>
      )
}

export default Detail