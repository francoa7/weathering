import {
      Modal,
      ModalOverlay,
      ModalContent,
      ModalHeader,
      ModalFooter,
      ModalBody,
      ModalCloseButton,
      useDisclosure,
      Button,
      Text
} from '@chakra-ui/react'


export default function Alert() {
      const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true })

      return (
            <>
                  <Modal onClose={onClose} isOpen={isOpen} isCentered position="fixed">
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
      )
}

