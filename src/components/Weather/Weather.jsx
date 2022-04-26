import React, { useEffect } from 'react'
import { Stack } from '@chakra-ui/react'
import Overview from '../Overview/Overview'
import Detail from '../Detail/Detail'
import { useDispatch, useSelector } from 'react-redux'
import { getCoordsWeather } from '../../redux/actions'

function Weather({ position }) {
      const weather = useSelector(state => state.currentWeather)
      const dispatch = useDispatch()
      useEffect(() => {
            position.latitude && dispatch(getCoordsWeather(position))
      }, [])
      return (
            <>
                  <Stack
                        flexGrow="0.15"
                        height="100vh"
                        bg="brand.ocBl"
                        color="brand.stBl"
                        alignItems="center"
                  >
                        {weather.main &&
                              <Overview weather={weather} />
                        }
                  </Stack>
                  <Stack flexGrow="0.85" marginTop="0 !important" id="HOLA" height="100vh" bg="brand.dOcBl" color="brand.stBl">
                        {weather.main &&
                              <Detail weather={weather} />
                        }
                  </Stack>
            </>
      )
}

export default Weather