import { Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import React from "react"
import { Accessories, ProductCard } from "../components/Products"
import v68 from "../public/v68Iradio.png"
import cp268 from "../public/cp268iRadio.png"
import DM301 from "../public/DM301Mytetra.png"
import Head from "next/head"

const Products = () => {
  return (
    <>
      <Head>
        <title>Products｜Radiotronic Sdn Bhd</title>
        <meta content="walkie talkie malaysia" property="og:title" />
        <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href="https://www.radiotronicwalkietalkie.com.my/products"
        />
      </Head>
      <div>
        <Box py={{ base: 8, lg: 12 }} px={4}>
          <Container maxW={"1440px"} pb={20}>
            <Heading
              mb={{ base: 8, lg: 12 }}
              pt={24}
              fontSize="4xl"
              color="teal.900"
              textAlign="center"
            >
              Our Products
            </Heading>
            <Text
              fontSize={{ base: "xl", lg: "3xl" }}
              as="h3"
              my={8}
              textAlign={{ base: "center", lg: "left" }}
            >
              Radiotronic Sdn Bhd is selling
              <b> Iradio Walkie Talkie</b> and <b>Mytetra Walkie Talkie</b> in
              Sabah, Malaysia.
            </Text>

            <SimpleGrid gap={12} columns={{ base: 1, md: 2, xl: 3 }}>
              <ProductCard
                url="/v68Iradio"
                hover
                actionBtn
                noOfLines={3}
                imgSrc={v68}
                name="V68 Iradio"
                desc="V68 iRadio is the best choices for a small, light and affordable walkie talkie. At the same point, it's also provide up to 11 functions, such as additional encryption, emergency alarm etc."
              />

              <ProductCard
                url="/cp268Iradio"
                hover
                actionBtn
                imgSrc={cp268}
                name="CP-268 Iradio"
                desc="CP-268 iRadio is the latest in RF communication, providing the best long-distance communication solutions in Malaysia."
              />

              <ProductCard
                url="/dm301Mytetra"
                hover
                actionBtn
                imgSrc={DM301}
                name="DM301 Mytetra"
                desc="Mytetra DM301 has features such as Real-time Communication, Battery Save / Warning, Three-pin Plug Charger and IP54."
              />
            </SimpleGrid>
            {/* Accessories */}
            <Heading
              mt={{ base: 8, lg: 12 }}
              mb={{ base: 8, lg: 12 }}
              pt={12}
              fontSize="4xl"
              color="primary.900"
              textAlign="center"
            >
              Accessories
            </Heading>
            <Accessories />
          </Container>
        </Box>
      </div>
    </>
  )
}

export default Products
