import {
  Box,
  Heading,
  Container,
  Button,
  VStack,
  Text,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react"
import Image from "next/image"
import contactImg from "../public/contact.svg"
import contact2 from "../public/contact2.svg"
import { RiWhatsappFill } from "react-icons/ri"
import { MdEmail } from "react-icons/md"

type Props = {}

const Contact = (props: Props) => {
  return (
    <div id="contact">
      <Box bgColor="gray.100" mt={{ base: 8, lg: 12 }} px={4} pb={32} mb={12}>
        <Container maxW={"1440px"}>
          <Heading
            mb={{ base: 8, lg: 12 }}
            pt={20}
            fontSize="4xl"
            color="primary.900"
            textAlign="center"
          >
            Contact Us
          </Heading>

          <SimpleGrid
            mb={{ base: 8, lg: 20 }}
            alignItems="center"
            columns={{ base: 1, lg: 2 }}
            gap={{ base: 4, lg: 16 }}
          >
            <Box>
              <Image src={contact2} alt="contact" priority={true} />
            </Box>
            <Box bg="whiteAlpha.800" shadow="xl" borderRadius="lg" rounded="xl">
              <VStack p={8}>
                <VStack alignItems="left" gap={8} width="full" mb={8}>
                  <Box>
                    <Text mb={2} fontWeight="700" fontSize="xl">
                      Contact us at :
                    </Text>
                    <Text fontSize="xl">+6 088-276 818 (Office)</Text>
                    <Text fontSize="xl">+6 016 522 2039 (Whatsapp) </Text>
                    <Text fontSize="xl">+6 016 830 1158 (Whatsapp)</Text>
                    <br />
                    <Text mb={2} fontWeight="700" fontSize="xl">
                      Email :
                    </Text>
                    <Text fontSize="xl">contact@radiotronic.com.my</Text>
                  </Box>
                </VStack>
                <Flex
                  w="full"
                  gap={2}
                  p={2}
                  rounded="lg"
                  border="1px solid #128c7e"
                  as="a"
                  bgColor={"#128c7e"}
                  _hover={{ bgColor: "teal.600" }}
                  cursor={"pointer"}
                  target="_blank"
                  align="center"
                  href="https://wa.link/32rkyb"
                  justify="center"
                >
                  <RiWhatsappFill color="white" fontSize="1.2rem" />
                  <Text fontWeight="600" color="white">
                    Whatsapp
                  </Text>
                </Flex>

                <Flex
                  w={"full"}
                  as="form"
                  action="mailto:contact@radiotronic.com.my"
                  target="_blank"
                  justify={"center"}
                  align="center"
                >
                  <Button
                    mt={2}
                    p={2}
                    width="full"
                    variant="solid"
                    color="white"
                    bgColor="primary.700"
                    _hover={{ bgColor: "primary.900" }}
                    type="submit"
                  >
                    <MdEmail color="white" fontSize="1.2rem" />
                    <Text ml={2}>Email Us</Text>
                  </Button>
                </Flex>
              </VStack>
            </Box>
          </SimpleGrid>

          <SimpleGrid
            mb={{ base: 8, lg: 20 }}
            alignItems="center"
            columns={{ base: 1, lg: 2 }}
            gap={{ base: 4, lg: 16 }}
          >
            <Heading
              display={{ base: "block", lg: "none" }}
              mb={8}
              pt={20}
              fontSize="4xl"
              color="primary.900"
              textAlign="center"
            >
              Location
            </Heading>
            <Box bg="whiteAlpha.800" shadow="xl" borderRadius="lg" rounded="xl">
              <VStack p={8}>
                <VStack alignItems="left" gap={8} width="full">
                  <Box>
                    <Text mb={2} fontWeight="700" fontSize="xl">
                      Opening hours :
                    </Text>
                    <Text fontSize="xl">
                      Monday to Friday 8:30 AM to 5:00 PM
                    </Text>
                  </Box>

                  <Box>
                    <Text mb={2} fontWeight="700" fontSize="xl">
                      Address :
                    </Text>
                    <Text fontSize="xl" pb={4}>
                      Lot 7, No. 13, Industri E33 Likas,Mile 2 1/2, Jalan
                      Tuaran, 88400 Kota Kinabalu, Sabah, Malaysia.
                    </Text>

                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.1403085197553!2d116.08163719999999!3d5.9754089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x323b6be0b91713c5%3A0xd053dfc85d02a2b1!2sRadiotronic%20Sdn%20Bhd%20(HQ)!5e0!3m2!1sen!2sus!4v1670327678765!5m2!1sen!2sus"
                      width="100%"
                      // height="auto"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </Box>
                </VStack>
              </VStack>
            </Box>
            <Box display={{ base: "none", lg: "block" }}>
              <Image src={contactImg} alt="contact" priority={true} />
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </div>
  )
}

export default Contact
