import React from 'react'
import { Button, FormControl, IconButton, Image, Input, Stack, Text } from '@chakra-ui/react'
import sunny from '../../public/assets/sunny.svg'
import { useDispatch, useSelector } from 'react-redux'
import { GoLocation } from 'react-icons/go'
import { IoMdLocate } from 'react-icons/io'
import { getCurrentPosition, getCurrentWeather, getNextDaysWeather } from '../../redux/actions'

function Overview() {
      const weather = useSelector(state => state.currentWeather)
      const position = useSelector(state => state.currentPosition)
      const dispatch = useDispatch()

      const date = new Date(weather.dt * 1000);
      function getCityWeather(e) {
            e.preventDefault()
            const cityInput = document.getElementById("city");
            dispatch(getCurrentWeather(cityInput.value));
            dispatch(getNextDaysWeather(cityInput.value))
            cityInput.value = ""
      }

      function locate() {
            dispatch(getCurrentPosition())
            dispatch(getCurrentWeather(position))
      }

      return (
            <Stack
                  height="100%"
                  justifyContent="center"
                  rowGap=".5rem"
            >

                  {weather.main
                        ?
                        <>
                              <Stack width="100%"
                                    pt="1rem"
                                    alignItems="center">
                                    <form onSubmit={(e) => getCityWeather(e)}>
                                          <FormControl
                                                pl="1rem"
                                                flexDirection="row"
                                                width="100%"
                                                alignSelf="center"
                                          >
                                                <Input
                                                      autoComplete='off'
                                                      id="city"
                                                      width="75%"
                                                      placeholder='City'
                                                />

                                                <Button
                                                      _hover={{ bg: "transparent" }}
                                                      bg="transparent"
                                                      type="submit"
                                                      width="25%"
                                                      leftIcon={<GoLocation />} >
                                                </Button>

                                          </FormControl>
                                    </form>
                              </Stack>
                              <Text fontSize="2rem"
                                    textAlign="center"
                              >
                                    {`${weather.main.temp.toFixed(1)}°C`}
                              </Text>
                              <Image src={
                                    weather.weather[0].icon === "01d"
                                          ?
                                          sunny
                                          :
                                          `http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`
                              } mt="0 !important" p="1rem" />
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
                              <Stack flexDirection="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    pb="2rem"
                              >
                                    <Text>
                                          {weather.name}
                                    </Text>
                                    <IconButton
                                          size="lg"
                                          pb="5px"
                                          bg="transparent"
                                          _hover={{ bg: "transparent" }}
                                          icon={<IoMdLocate />}
                                          onClick={() => locate()}

                                    />
                              </Stack>
                        </>
                        :
                        <Text>Loading</Text>
                  }
            </Stack >
      )
}

export default Overview