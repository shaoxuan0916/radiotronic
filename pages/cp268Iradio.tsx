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
import cp268 from "../public/cp268iRadio.png"
import Head from "next/head"

type Props = {}

const functions = [
  {
    id: 1,
    title: "199 Channels Capacity",
  },
  {
    id: 2,
    title: "CTCSS/DCS Code",
  },
  {
    id: 3,
    title: "Scrambler",
  },
  {
    id: 4,
    title: "Compandor",
  },
  {
    id: 5,
    title: "Frequency Hopping",
  },
  {
    id: 6,
    title: "Emergency Alarm",
  },
  {
    id: 7,
    title: "Hands Free VOX",
  },
  {
    id: 8,
    title: "Voice Report",
  },
  {
    id: 9,
    title: "Private Call, Group Call, All Call",
  },
  {
    id: 10,
    title: "Emergency Alarm",
  },
  {
    id: 11,
    title: "Additional Encryption",
  },
]

const tableGeneral: any = [
  { title: "Frequency", value: "400MHz-480MHz" },
  { title: "Channel Capacity", value: "199 Channels" },
  { title: "Working Voltage", value: "DC 7.4V" },
  { title: "Antenna Impedance", value: "50Ω" },
  { title: "Frequency Stability", value: "±2.5ppm" },
  { title: "Working Temperature", value: "-20°C~+50°C" },
  { title: "Working Mode", value: "Simple or Semi-Duplex" },
  {
    title: "Working Current",
    value: "Transmitting: ≤1.45A | Receiving: ≤0.4A",
  },
  {
    title: "Dimension",
    value: "154*59*37mm (not contain antenna & belt clip)",
  },
  { title: "Weight", value: "218g (not contain antenna & belt clip)" },
]

const tableTramsmitting = [
  { title: "Modulation Mode", value: "F3E" },
  {
    title: "Maximum Deviation",
    value: "≤ 5KHz (Wide Band); ≤ 2.5KHz (Narrow Band)",
  },
  { title: "Spurious Power", value: "≤7.5µW" },
  {
    title: "Adjacent Channel Power",
    value: "≤ -65dB (Wide Band); ≤ -60dB (Narrow Band)",
  },
]

const tableReceiving = [
  {
    title: "RX Sensitivity (12dB SINAD)",
    value: "0.2µV / 25Khz; 0.25µV / 12.5KHz",
  },
  { title: "Audio Power", value: "≤ 1W" },
  {
    title: "Audio Distortion",
    value: "≤ 10%",
  },
  { title: "Clustter Suppression", value: "≥ 65dB" },
]

const products = (props: Props) => {
  return (
    <>
      <Head>
        <title>Iradio CP268 | Radiotronic Sdn Bhd</title>
      </Head>
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
              CP-268 Iradio
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
                imgSrc={cp268}
                name="CP-268 Iradio"
                desc="CP-268 iRadio is the latest in RF communication, providing the best long-distance communication solutions in Malaysia."
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
                <SimpleGrid
                  mt={8}
                  columns={{ base: 1, sm: 2 }}
                  spacing={{ base: 2, lg: 8 }}
                >
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
            </GridItem>
          </Grid>

          {/* Specification */}
          <Box textAlign="center" mt={{ base: 8, lg: 40 }} mb={4}>
            <Text decoration="underline" as="b" fontSize="3xl" color="teal.900">
              Specification
            </Text>
          </Box>

          <SimpleGrid
            pt={8}
            columns={{ base: 1, lg: 2 }}
            gap={{ base: 8, lg: 12 }}
          >
            {/* General */}
            <TableContainer mt={12} whiteSpace="pre-wrap">
              <Text
                mb={4}
                as="b"
                fontSize="xl"
                decoration="underline"
                color="teal.900"
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
                <Image src={sirimCP268} alt="cp268 Sirim" priority={true} />
              </Box>
            </VStack> */}
          </SimpleGrid>
        </Container>
      </Box>
    </>
  )
}

export default products
