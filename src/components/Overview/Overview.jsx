import React from 'react'
import {
      Button, FormControl, IconButton, Image, Input, CircularProgress, Stack, Text, Modal,
      ModalOverlay,
      ModalContent,
      ModalHeader,
      ModalFooter,
      ModalBody,
      ModalCloseButton,
      useDisclosure,
} from '@chakra-ui/react'
import sunny from '../../public/assets/sunny.svg'
import moon from '../../public/assets/moon.png'
import { useDispatch, useSelector } from 'react-redux'
import { GoLocation } from 'react-icons/go'
import { IoMdLocate } from 'react-icons/io'
import { getCurrentPosition, getCurrentWeather, getNextDaysWeather } from '../../redux/actions'
import Alert from '../Utils/Alert'

function Overview() {
      const { isOpen, onOpen, onClose } = useDisclosure()

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
            dispatch(getNextDaysWeather(position))
      }

      return (
            <Stack
                  height="100%"
                  justifyContent="center"
                  rowGap=".5rem"
                  width="100%"
            >

                  {weather.main
                        ?
                        <>
                              <Stack width="100%"
                                    pt="1rem"
                                    alignItems="center"
                                    userSelect="none"
                              >
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
                                                      _focus={{ outline: "none" }}
                                                      width="25%"
                                                      leftIcon={<GoLocation />} >
                                                </Button>

                                          </FormControl>
                                    </form>
                              </Stack>

                              <Text fontSize="3rem"
                                    textAlign="center"
                              >
                                    {`${weather.main.temp.toFixed(1)}°C`}
                              </Text>
                              <Image
                                    alignSelf="center"
                                    width={{ base: "150px", md: "200px", lg: "200px" }}
                                    userSelect="none"
                                    src={
                                          weather.weather[0].icon === "01d"
                                                ?
                                                sunny
                                                :
                                                weather.weather[0].icon === "01n"
                                                      ?
                                                      moon :
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
                                          bg="transparent"
                                          _hover={{ bg: "transparent" }}
                                          icon={<IoMdLocate />}
                                          onClick={() => {
                                                console.log(position);
                                                if (position === "Mendoza") {
                                                      onOpen()
                                                } else return locate()
                                          }}
                                          _focus={{ outline: "none" }}
                                    />
                              </Stack>
                              <Modal
                                    isOpen={isOpen}
                                    isCentered position="fixed">
                                    <ModalOverlay />
                                    <ModalContent width={{ base: "90%", md: "50%" }}>
                                          <ModalHeader>Location permission</ModalHeader>
                                          <ModalBody>
                                                <Text >Please <b>enable location permissions</b> in your browser in order to access weather features at your current location. Otherwise, you can continue searching for the climate of the cities by name. <b>If you already did it, just refresh the page.</b></Text>
                                          </ModalBody>
                                          <ModalFooter>
                                                <Button onClick={onClose} colorScheme="blue">Close</Button>
                                          </ModalFooter>
                                    </ModalContent>
                              </Modal>
                        </>
                        :
                        <CircularProgress size='80px' isIndeterminate />
                  }
            </Stack >
      )
}

export default Overview