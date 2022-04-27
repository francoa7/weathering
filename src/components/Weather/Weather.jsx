import React, { useEffect } from 'react'
import { Stack, Text } from '@chakra-ui/react'
import Overview from '../Overview/Overview'
import Detail from '../Detail/Detail'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentWeather } from '../../redux/actions'
import Day from '../NextDays/Day'
import NextDays from '../NextDays/NextDays'

function Weather({ position }) {
      const weather = useSelector(state => state.currentWeather)
      const dispatch = useDispatch()
      useEffect(() => {
            position.latitude && dispatch(getCurrentWeather(position))
      }, [])
      return (
            <>
                  <Stack
                        flexGrow="0.5"
                        height="100vh"
                        bg="brand.ocBl"
                        color="brand.stBl"
                        alignItems="center"
                  >
                        {weather.main
                              ?
                              <Overview />
                              :
                              <Text>Loading</Text>
                        }
                  </Stack>
                  <Stack flexGrow="0.5" marginTop="0 !important" id="HOLA" height="100vh" bg="brand.dOcBl" color="brand.stBl" justifyContent="space-evenly">
                        {weather.main
                              ?
                              <>
                                    <NextDays currentWeather={weather} position={position} />
                                    <Detail weather={weather} />

                              </>
                              :
                              <Text>Loading</Text>
                        }
                  </Stack>
            </>
      )
}

export default Weather