import React from 'react'
import { Stack, Text } from '@chakra-ui/react'
import WindDetail from './Cards/WindDetail'
import Humidity from './Cards/Humidity'
import Visibility from './Cards/Visibility'
import Preassure from './Cards/Pressure'

function Detail({ weather }) {
      return (
            <Stack id="statsContainer" width={{ base: "100%", md: "80%" }} alignSelf="center" >
                  {weather.main
                        ? <>
                              <Stack
                                    alignSelf="center"
                                    alignItems="center"
                                    justifyContent="center"
                                    rowGap={{ base: "1rem", md: "2rem" }}
                                    columnGap={{ base: "1rem", md: "3rem" }}
                                    width="100%"
                                    height="fit-content"
                                    flexWrap="wrap"
                                    flexDirection="row">
                                    <Text width="100%" fontWeight={900} >Today's Highlights</Text>
                                    <WindDetail weather={weather} />
                                    <Humidity weather={weather} />
                                    <Visibility weather={weather} />
                                    <Preassure weather={weather} />

                              </Stack>
                        </>
                        :
                        <Text>Loading</Text>
                  }

            </Stack>
      )
}

export default Detail
