import React from 'react'
import {
      Button, FormControl, IconButton, Image, Input, CircularProgress, Stack, Text, Modal,
      ModalOverlay,
      ModalContent,
      ModalHeader,
      ModalFooter,
      ModalBody,
      useDisclosure,
      Link,
} from '@chakra-ui/react'
import sunny from '../../public/assets/sunny.svg'
import moon from '../../public/assets/moon.png'
import { useDispatch, useSelector } from 'react-redux'
import { GoLocation, GoLink, GoMarkGithub, GoMail } from 'react-icons/go'
import { IoMdLocate } from 'react-icons/io'
import { FaLinkedinIn } from 'react-icons/fa'
import { getCurrentPosition, getCurrentWeather, getNextDaysWeather } from '../../redux/actions'

function Overview() {
      const { isOpen: isLocationOpen, onOpen: onLocationOpen, onClose: onLocationClose } = useDisclosure()
      const { isOpen: isContactOpen, onOpen: onContactOpen, onClose: onContactClose } = useDisclosure()

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
                                                      onLocationOpen()
                                                } else return locate()
                                          }}
                                          _focus={{ outline: "none" }}
                                    />
                              </Stack>
                              <Button

                                    alignSelf="center"
                                    width="fit-content"
                                    variant="link"
                                    _focus={{ outline: "none" }}
                                    onClick={() => { onContactOpen() }}
                              >
                                    Contact
                              </Button>

                              <Modal
                                    isOpen={isContactOpen}
                                    isCentered position="fixed">
                                    <ModalOverlay />
                                    <ModalContent
                                          width={{ base: "90%", md: "25%" }}
                                    >
                                          <ModalHeader>Get in touch with me! 😁</ModalHeader>
                                          <ModalBody
                                                display="flex"
                                                flexWrap="wrap"
                                                justifyContent="center"
                                                columnGap="1rem"
                                          >
                                                <Button
                                                      flexGrow=".5"
                                                      variant="ghost"
                                                      colorScheme="pink"
                                                      _focus={{ outline: "none" }}
                                                      leftIcon={<GoLink />} >
                                                      <Link
                                                            _focus={{ outline: "none" }}
                                                            href='https://francoangulo.vercel.app/'
                                                            isExternal>
                                                            Portfolio
                                                      </Link>
                                                </Button>
                                                <Button
                                                      flexGrow=".5"
                                                      variant="ghost"
                                                      colorScheme="blue"
                                                      _focus={{ outline: "none" }}
                                                      leftIcon={<FaLinkedinIn />} >

                                                      <Link
                                                            _focus={{ outline: "none" }}
                                                            href='https://www.linkedin.com/in/franco-angulo/'
                                                            isExternal>
                                                            LinkedIn
                                                      </Link>
                                                </Button>
                                                <Button
                                                      flexGrow=".5"
                                                      variant="ghost"
                                                      colorScheme="gray"
                                                      _focus={{ outline: "none" }}
                                                      leftIcon={<GoMarkGithub />} >
                                                      <Link
                                                            _focus={{ outline: "none" }}
                                                            href='https://github.com/francoa7'
                                                            isExternal>
                                                            GitHub
                                                      </Link>
                                                </Button>
                                                <Button
                                                      flexGrow=".5"
                                                      variant="ghost"
                                                      colorScheme="red"
                                                      _focus={{ outline: "none" }}
                                                      leftIcon={<GoMail />} >
                                                      <Link
                                                            _focus={{ outline: "none" }}
                                                            href='mailto:francoangulo2001@gmail.com'
                                                            isExternal>
                                                            Email
                                                      </Link>
                                                </Button>
                                          </ModalBody>
                                          <ModalFooter>
                                                <Button onClick={onContactClose} colorScheme="blue">Close</Button>
                                          </ModalFooter>
                                    </ModalContent>
                              </Modal>

                              <Modal
                                    isOpen={isLocationOpen}
                                    isCentered position="fixed">
                                    <ModalOverlay />
                                    <ModalContent width={{ base: "90%", md: "50%" }}>
                                          <ModalHeader>Location permission</ModalHeader>
                                          <ModalBody>
                                                <Text >Please <b>enable location permissions</b> in your browser in order to access weather features at your current location. Otherwise, you can continue searching for the climate of the cities by name. <b>If you already did it, just refresh the page.</b></Text>
                                          </ModalBody>
                                          <ModalFooter>
                                                <Button onClick={onLocationClose} colorScheme="blue">Close</Button>
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