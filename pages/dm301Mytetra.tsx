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
import MytetraLogo from "../public/MytetraLogo.png"
import DM301 from "../public/DM301Mytetra.png"
import Head from "next/head"

type Props = {}

const functions = [
  {
    id: 1,
    title: "Elegant Design",
  },
  {
    id: 2,
    title: "Real-time Communication",
  },
  {
    id: 3,
    title: "Battery Save / Warning",
  },
  {
    id: 4,
    title: "Certified by SIRIM",
  },
  {
    id: 5,
    title: "Three-pin Plug Charger",
  },
  {
    id: 6,
    title: "IP54",
  },
]

const tableGeneral: any = [
  {
    title: "SIRIM Registration No",
    value: "RGRC/04A/0521/5(21-2317)",
  },
  { title: "Working Frequency", value: "400-480Mhz" },
  { title: "CStandby Time", value: "55 Hours Standard | 71 Hours Optional" },
  { title: "IP Level", value: "IP54" },
  { title: "Maximum number of Zones", value: "2" },
  { title: "Frequency Stability", value: "0.5ppm" },
  { title: "Maximum number of Channels Per Zone", value: "16" },
  { title: "Number of Channels", value: "32" },
  {
    title: "Battery Capacity",
    value: "1950",
  },
  {
    title: "Power Output",
    value: "1W(L) 5W(H)",
  },
  {
    title: "Rated Audio",
    value: "1000mW",
  },
  {
    title: "Frequency Modulation Method",
    value: "11KOF3E/16KOFE (12.5KHz/25KHz)",
  },
  {
    title: "Working temperature",
    value: "-30°C~+50°C",
  },
  {
    title: "4FSK Digital Modulation",
    value: "12.5KHz Data Only:7KGOFXD | 12.5KHz Data Voice:7K60FXW",
  },
  {
    title: "Dimension",
    value: "256x62x42mm",
  },
  { title: "Weight", value: "239g" },
]

const products = (props: Props) => {
  return (
    <>
      <Head>
        <title>Mytetra DM301 | Radiotronic Sdn Bhd</title>
        <meta content="Mytetra DM301" property="og:title" />
        <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href="https://www.radiotronicwalkietalkie.com.my/dm301Mytetra"
        />
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
              src={MytetraLogo}
              height={50}
              width={200}
              objectFit="contain"
              alt="mytetra logo"
              priority={true}
            />

            <Heading color={"primary.900"} py={8} size="xl">
              DM301 Mytetra
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
                imgSrc={DM301}
                name="DM301 Mytetra"
                desc="Mytetra DM301 has features such as Real-time Communication, Battery Save / Warning, Three-pin Plug Charger and IP54."
              />
            </GridItem>

            <GridItem colSpan={3}>
              <Box mt={{ base: 8, lg: 0 }}>
                <Box>
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
                </Box>

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
            maxW={"800px"}
            mx="auto"
            pt={8}
            // columns={{ base: 1, lg: 2 }}
            // gap={{ base: 8, lg: 12 }}
          >
            {/* General */}
            <Box>
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
                <Image
                  src={DM301MytetraSirim1}
                  alt="dm301sirim"
                  priority={true}
                />
                <Image
                  src={DM301MytetraSirim2}
                  alt="dm301sirim"
                  priority={true}
                />
              </Box>
            </VStack> */}
          </SimpleGrid>
        </Container>
      </Box>
    </>
  )
}

export default products
