import React, { useEffect } from 'react'
import { Stack, Text, CircularProgress } from '@chakra-ui/react'
import Day from './Day'
import { useDispatch, useSelector } from 'react-redux'
import { getNextDaysWeather } from '../../redux/actions'

function NextDays({ currentWeather, position }) {
      useEffect(() => {
            dispatch(getNextDaysWeather(position))
      }, [])

      const dispatch = useDispatch()
      const nextDaysWeather = useSelector(state => state.nextDaysWeather)
      const date = new Date(currentWeather.dt * 1000);
      const dayNumber = date.toLocaleString("en-US", { day: "numeric" })
      const dividedDays = {};
      nextDaysWeather.list?.forEach((day) => {
            const currentDate = new Date(day.dt * 1000)
            const currentDayNumber = currentDate.toLocaleString("en-US", { day: "numeric" })
            if (currentDayNumber === dayNumber) return;
            const dayKey =
                  currentDate.toLocaleString("en-US", { month: "numeric" })
                        .concat("-",
                              currentDayNumber
                        )
            if (dividedDays[dayKey]) {
                  dividedDays[dayKey].push(day)
            } else {
                  dividedDays[dayKey] = []
                  dividedDays[dayKey].push(day)
            }
      })



      function setDay(stats) {
            const day = new Date(stats[0]?.dt * 1000).toLocaleString("en-US", { weekday: "long" })
            return day;
      }
      const elements = [];
      if (nextDaysWeather.list) {
            for (let i = 0; i < 5; i++) {
                  elements.push(<Day currentWeather={dividedDays[Object.keys(dividedDays)[i]]} day={setDay(dividedDays[Object.keys(dividedDays)[i]])} />)

            }
      }
      return (
            <Stack width={{ base: "100%", md: "80%" }} alignSelf="center">
                  <Text
                        width={{ base: "90%", md: "100%" }}
                        alignSelf="center"
                        fontWeight={900}
                  >Next Days...</Text>
                  <Stack
                        id='daysCards'
                        flexDirection="row"
                        columnGap={{ base: "1rem", md: "2rem" }}
                        justifyContent="center"
                        flexWrap={{ base: "wrap", md: "nowrap" }}
                        rowGap={{ base: "2rem" }}

                  >
                        {
                              nextDaysWeather.list
                                    ?
                                    elements
                                    :
                                    <CircularProgress size='60px' isIndeterminate />

                        }

                  </Stack>
            </Stack>
      )
}

export default NextDays;