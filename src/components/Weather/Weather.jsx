import React, { useEffect } from 'react'
import { Stack, CircularProgress } from '@chakra-ui/react'
import Overview from '../Overview/Overview'
import Detail from '../Detail/Detail'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentWeather } from '../../redux/actions'
import NextDays from '../NextDays/NextDays'

function Weather({ position }) {
      const weather = useSelector(state => state.currentWeather)
      const dispatch = useDispatch()
      useEffect(() => {
            if (typeof position === "string") dispatch(getCurrentWeather(position))
            else position.latitude && dispatch(getCurrentWeather(position))
      }, [])
      return (
            <>

                  {
                        weather.main
                              ?

                              <>
                                    <Stack
                                          flexGrow={{ lg: "0.2" }}
                                          height="100vh"
                                          bg="brand.ocBl"
                                          color="brand.stBl"
                                          alignItems="center"
                                          width={{ base: "100%", lg: "40%" }}
                                          id="overviewContainer"
                                    >

                                          <Overview />


                                    </Stack>
                                    <Stack
                                          width={{ base: "100%" }}
                                          p="2rem"
                                          flexGrow={{ lg: "0.8" }}
                                          marginTop="0 !important"
                                          id="detailContainer"
                                          rowGap="2rem"
                                          height={{ base: "fit-content", lg: "100vh" }}
                                          bg="brand.dOcBl"
                                          color="brand.stBl"
                                          justifyContent="space-evenly"
                                    >

                                          <NextDays currentWeather={weather} position={position} />
                                          <Detail weather={weather} />


                                    </Stack>
                              </>
                              :
                              <Stack
                                    height="100vh"
                                    width="100vw"
                                    bg="brand.dOcBl"
                                    color="brand.stBl"
                                    alignItems="center"
                                    justifyContent="center"
                              >
                                    <CircularProgress size='80px' isIndeterminate />
                              </Stack>
                  }
            </>
      )
}

export default Weather