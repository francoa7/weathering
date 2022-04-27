import { Image, Stack, Text } from '@chakra-ui/react'
import React, { } from 'react'
import sunny from '../../public/assets/sunny.png'

function Day({ currentWeather, day }) {

      console.log(currentWeather);
      console.log({ day });
      const temps = {
            max: currentWeather[0].main.temp_max,
            min: currentWeather[0].main.temp_min
      }
      currentWeather.forEach((stat) => {
            if (stat.main.temp_max > temps.max) temps.max = stat.main.temp_max
            if (stat.main.temp_min < temps.min) temps.min = stat.main.temp_min
      })
      let icon = currentWeather[0].weather[0].icon.slice(0, -1).concat("", "d");
      console.log(icon);
      return (
            <Stack bg="brand.ocBl" mt="0 !important" alignItems="center" p=".2rem 1rem">
                  <Text>{day}</Text>
                  <Image src={
                        icon === "01d"
                              ?
                              sunny :
                              `http://openweathermap.org/img/wn/${icon}@4x.png`
                  }
                        width="7rem"
                  />
                  <Stack flexDirection="row" mt="0 !important" alignItems="center" columnGap="1rem">
                        <Text mt="0 !important">{temps.max.toFixed(0)}°C</Text>
                        <Text mt="0 !important">{temps.min.toFixed(0)}°C</Text>
                  </Stack>

            </Stack>
      )
}

export default Day