import React, { useEffect } from 'react'
import { Image, Stack, Text } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { getCoordsWeather } from '../../redux/actions';

function Overview({ weather }) {

      const date = new Date(weather.dt * 1000);
      return (
            <Stack
                  height="100%"
                  justifyContent="center"
                  rowGap="2rem"
            >

                  {weather.main
                        ?
                        <>
                              <Text fontSize="2rem"
                                    textAlign="center"
                              >
                                    {`${weather.main.temp.toFixed(1)}°C`}
                              </Text>
                              <Image src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} mt="0 !important" />
                              <Text
                                    textAlign="center"
                              >
                                    {weather.weather[0].main}
                              </Text>
                              <Text
                                    textAlign="center"
                              >
                                    Today - {`${date.toLocaleString("en-US", { weekday: "long", day: "numeric", month: "long", hour: "numeric", minute: "numeric" })}`}
                              </Text>
                        </>
                        :
                        <Text>Loading</Text>
                  }
            </Stack >
      )
}

export default Overview