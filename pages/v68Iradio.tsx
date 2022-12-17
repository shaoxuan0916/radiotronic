import {
  Container,
  SimpleGrid,
  Heading,
  Text,
  Box,
  VStack,
  Grid,
  GridItem,
  HStack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Flex,
  Table,
  TableContainer,
  Tr,
  Td,
  Tbody,
  Highlight,
} from "@chakra-ui/react"
import Image from "next/image"
import { ProductCard } from "../components/Products"
import { FcCheckmark } from "react-icons/fc"
import iRadioLogo from "../public/iRadioLogo.png"
import v68 from "../public/v68Iradio.png"
import sirimV68 from "../public/v68IradioSirim.jpeg"
import { useState } from "react"

type Props = {}

const functions = [
  {
    id: 1,
    title: "16 Programmable Side Keys",
  },
  {
    id: 2,
    title: "CTCSS/DCS Code",
  },
  {
    id: 3,
    title: "High/Low Power Switching",
  },
  {
    id: 4,
    title: "Wide/Narrow Band Switching",
  },
  {
    id: 5,
    title: "Scanning",
  },
  {
    id: 6,
    title: "Monitor",
  },
  {
    id: 7,
    title: "Battery Saving",
  },
  {
    id: 8,
    title: "Low Battery Alerts",
  },
  {
    id: 9,
    title: "Emergency Alarm",
  },
  {
    id: 10,
    title: "Additional Encryption",
  },
  {
    id: 11,
    title: "TOT",
  },
]

const tableGeneral: any = [
  { title: "Frequency Range", value: "400MHz-480MHz" },
  { title: "Channel Storage", value: "16" },
  { title: "Voltage", value: "DC3.7V" },
  { title: "Antenna Impedance", value: "50Ω" },
  { title: "Frequency Stability", value: "±20ppm" },
  { title: "Working Temperature", value: "-10°C~+50°C" },
  { title: "Working Current", value: "TX Status: ≤1.3A | RX Status: ≤0.45A" },
  { title: "Battery Capacity", value: "1100mAh" },
  { title: "Dimension", value: "99×62×32mm (without antenna & belt clip)" },
  { title: "Weight", value: "142g (without antenna & belt clip)" },
]

const tableTramsmitting = [
  { title: "TX Power", value: "2W±0.3 (DC4.2V)" },
  { title: "Modulation Mode", value: "F3E" },
  {
    title: "Maximum Frequency Deviation",
    value: "≤ 5KHz (Wide Band); ≤ 2.5KHz (Narrow Band)",
  },
  { title: "Spurious Power", value: "≤7.5µW" },
  {
    title: "Adjacent Frequency Power",
    value: "≤ -65dB (Wide Band); ≤ -60dB (Narrow Band)",
  },
]

const tableReceiving = [
  {
    title: "RX Sensitivity (12dB SINAD)",
    value: "≤ 0.2µV (Wide Band); ≤ 0.25µV (Narrow Band)",
  },
  { title: "Audio Power", value: "≤ 1W (8ohm)" },
  {
    title: "Audio Distortion",
    value: "≤ 5%",
  },
  { title: "Clustter Suppression", value: "≥ 65dB" },
]

const Products = (props: Props) => {
  const [show, setShow] = useState<boolean>(false)

  return (
    <>
      <Box pt={28} pb={24} px={4}>
        <Container maxW={"1440px"}>
          {/* Heading */}
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            gap={{ base: 0, md: 12 }}
          >
            <Image
              src={iRadioLogo}
              height={50}
              width={200}
              objectFit="contain"
              alt="Iradio Logo"
              priority={true}
            />
            <Heading color={"primary.900"} py={8} size="xl">
              V68 Iradio
            </Heading>
          </Flex>

          {/* Image, Functions and Details */}
          <Grid
            templateColumns={{ base: "auto", lg: "repeat(5,1fr)" }}
            gap={{ base: 0, lg: 12 }}
          >
            <GridItem mb={{ base: 8, lg: 0 }} colSpan={2}>
              <ProductCard
                actionBtn={false}
                hover={false}
                imgSrc={v68}
                name="V68 Iradio"
                desc="Located in China two-way radio town--Quanzhou, Iradio
              Electronics Co., Ltdwas established naturally and is a modern
              technology enterprise integrating R&D, manufacture and
              distribution in a rapid developing step."
              />
            </GridItem>
            <GridItem colSpan={3}>
              <Box mt={{ base: 8, lg: 0 }}>
                <Text as="b" fontSize="2xl">
                  <Highlight
                    query="Functions"
                    styles={{
                      px: "2",
                      py: "1",
                      rounded: "5px",
                      bg: "yellow.100",
                    }}
                  >
                    Functions
                  </Highlight>
                </Text>
                <SimpleGrid mt={8} columns={{ base: 1, sm: 2 }} spacing={2}>
                  {functions.map((item) => (
                    <HStack key={item.id}>
                      <Box color={"green.400"} px={2}>
                        <FcCheckmark fontSize="1.5rem" />
                      </Box>
                      <VStack align={"start"}>
                        <Text>{item.title}</Text>
                      </VStack>
                    </HStack>
                  ))}
                </SimpleGrid>
              </Box>

              <Box mt={{ base: 12, lg: 16 }}>
                <Text mb={4} as="b" fontSize="2xl">
                  <Highlight
                    query="Features"
                    styles={{
                      px: "2",
                      py: "1",
                      rounded: "5px",
                      bg: "yellow.100",
                    }}
                  >
                    Features
                  </Highlight>
                </Text>

                <Text mt={4} py={2}>
                  1. Long press sidekey1 to turn in monitor function
                </Text>
                <Text py={2}>
                  2. In the same channel, long push the toggle switch 2 seconds
                  into [CH-] to turn on the emergency alarm in two radios
                </Text>
                <Text py={2}>
                  3. Long push the toggle switch 2 seconds into [CH+] to lock
                  the keypad
                </Text>

                <Box py={2}>
                  <Button
                    colorScheme="primary.900"
                    variant="link"
                    onClick={() => setShow(true)}
                  >
                    More Features
                  </Button>

                  <Modal isOpen={show} onClose={() => setShow(false)}>
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>V68 Iradio Features</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        <Box>
                          <Text py={2}>
                            1. Long press sidekey1 to turn in monitor function
                          </Text>
                          <Text py={2}>
                            2. In the same channel, long push the toggle switch
                            2 seconds into [CH-] to turn on the emergency alarm
                            in two radios
                          </Text>
                          <Text py={2}>
                            3. Long push the toggle switch 2 seconds into [CH+]
                            to lock the keypad
                          </Text>
                          <Text py={2}>4. Frequency hopping setup</Text>
                          <Text py={2}>5. Low battery alert</Text>
                          <Text py={2}>6. TOT</Text>
                          <Text py={2}>7. 0-9 Squelch level</Text>
                          <Text py={2}>8. Battery save</Text>
                        </Box>
                      </ModalBody>

                      <ModalFooter>
                        <Button
                          colorScheme="blue"
                          mr={3}
                          onClick={() => setShow(false)}
                        >
                          Close
                        </Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </Box>
              </Box>
            </GridItem>
          </Grid>

          <Box textAlign="center" mt={{ base: 8, lg: 40 }} mb={4}>
            <Text
              decoration="underline"
              as="b"
              fontSize="3xl"
              color="primary.900"
            >
              Specification
            </Text>
          </Box>
          <SimpleGrid
            pt={8}
            columns={{ base: 1, lg: 2 }}
            gap={{ base: 8, lg: 12 }}
          >
            {/* Specification */}
            {/* General */}
            <TableContainer mt={12} whiteSpace="pre-wrap">
              <Text
                mb={4}
                as="b"
                fontSize="xl"
                decoration="underline"
                color="primary.900"
              >
                General
              </Text>
              <Table
                mt={4}
                size="md"
                variant="striped"
                shadow="md"
                rounded="md"
              >
                <Tbody>
                  {tableGeneral.map((item: any) => (
                    <Tr fontSize="sm" key={item.title}>
                      <Td maxWidth={32}>{item.title}</Td>
                      <Td>{item.value}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>

            {/* Tramsmitting */}
            <Box>
              <TableContainer mt={12} whiteSpace="pre-wrap">
                <Text
                  mb={4}
                  as="b"
                  fontSize="xl"
                  decoration="underline"
                  color="teal.900"
                >
                  Tramsmitting
                </Text>
                <Table
                  mt={4}
                  size="md"
                  variant="striped"
                  shadow="md"
                  rounded="md"
                >
                  <Tbody>
                    {tableTramsmitting.map((item) => (
                      <Tr fontSize="sm" key={item.title}>
                        <Td maxWidth={32}>{item.title}</Td>
                        <Td>{item.value}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>

              {/* Receiving */}
              <TableContainer mt={12} whiteSpace="pre-wrap">
                <Text
                  mb={4}
                  as="b"
                  fontSize="xl"
                  decoration="underline"
                  color="teal.900"
                >
                  Receiving
                </Text>
                <Table mt={4} size="md" variant="striped">
                  <Tbody>
                    {tableReceiving.map((item) => (
                      <Tr fontSize="sm" key={item.title}>
                        <Td maxWidth={32}>{item.title}</Td>
                        <Td>{item.value}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>

            {/*  Sirim Certificate */}
            {/* <VStack textAlign="center" mt={{ base: 8, lg: 40 }} mb={4}>
              <Text
                decoration="underline"
                as="b"
                fontSize="3xl"
                color="teal.900"
              >
                Sirim Certificate
              </Text>
              <Box pt={{ base: 8, lg: 20 }}>
                <Image src={sirimV68} alt="Iradio Logo" priority={true} />
              </Box>
            </VStack> */}
          </SimpleGrid>
        </Container>
      </Box>
    </>
  )
}

export default Products
