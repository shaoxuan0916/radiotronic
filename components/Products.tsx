import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  VStack,
  Text,
  Button,
} from "@chakra-ui/react"
import Image from "next/image"
import v68 from "../public/v68Iradio.png"
import cp268 from "../public/cp268iRadio.png"
import DM301 from "../public/DM301Mytetra.png"
import CP268Battery from "../public/CP268Battery.png"
import CP268Charger from "../public/CP268Charger.png"
import Earpiece from "../public/Earpiece.png"
import V68Battery from "../public/V68Battery.png"
import V68Charger from "../public/V68Charger.png"
import DM301Battery from "../public/DM301Battery.png"
import DM301Charger from "../public/DM301Charger.png"

import Link from "next/link"

interface ProductsProps {}

interface ProductCardProps {
  url?: string
  hover?: boolean
  imgSrc: any
  name: string
  desc: string
  actionBtn?: boolean
  noOfLines?: number
}

interface AccessoryCardProps {
  hover?: boolean
  imgSrc: any
  name: string
}

export const AccessoryCard: React.FC<AccessoryCardProps> = ({
  hover,
  imgSrc,
  name,
}) => {
  return (
    <>
      <VStack
        _hover={hover ? { shadow: "xl", transform: "scale(1.05)" } : {}}
        transition="transform 0.15s ease-in-out"
        cursor="pointer"
        shadow="md"
        rounded="3xl"
        px={2}
        py={8}
        bgColor="gray.50"
      >
        <Image
          src={imgSrc}
          style={{
            objectFit: "contain",
            width: "auto",
            height: "auto",
            maxHeight: "300px",
          }}
          alt="accessories"
          priority={true}
        />
        <Text
          fontWeight={"semibold"}
          fontSize={{ base: "md", sm: "lg", lg: "xl", xl: "2xl" }}
          textAlign={"center"}
        >
          {name}
        </Text>
      </VStack>
    </>
  )
}

export const Accessories = () => {
  return (
    <>
      <SimpleGrid gap={8} columns={{ base: 2, md: 3, lg: 4 }}>
        <AccessoryCard
          hover
          imgSrc={CP268Battery}
          name="Iradio CP268 Battery"
        />
        <AccessoryCard
          hover
          imgSrc={CP268Charger}
          name="Iradio CP268 Rapid Charger"
        />
        <AccessoryCard hover imgSrc={V68Battery} name="Iradio V68 Battery" />
        <AccessoryCard
          hover
          imgSrc={V68Charger}
          name="Iradio V68 Rapid Charger"
        />
        <AccessoryCard
          hover
          imgSrc={DM301Battery}
          name="Mytetra DM301 Battery"
        />
        <AccessoryCard
          hover
          imgSrc={DM301Charger}
          name="Mytetra DM301 Rapid Charger"
        />
        <AccessoryCard
          hover
          imgSrc={Earpiece}
          name="Iradio / Mytetra Surveillance Earpice"
        />
      </SimpleGrid>
    </>
  )
}

export const ProductCard: React.FC<ProductCardProps> = ({
  url,
  hover,
  imgSrc,
  name,
  desc,
  actionBtn,
  noOfLines,
}) => {
  return (
    <Link href={url ? url : ""}>
      <VStack
        _hover={hover ? { shadow: "xl", transform: "scale(1.05)" } : {}}
        transition="transform 0.15s ease-in-out"
        cursor="pointer"
        shadow="md"
        rounded="3xl"
        px={2}
        py={8}
        bgColor="gray.50"
      >
        <Image
          src={imgSrc}
          style={{ objectFit: "contain", height: "350px", width: "auto" }}
          alt="product"
          priority={true}
        />
        <Text as="b" py={4} fontSize="3xl">
          {name}
        </Text>
        <Text
          px={4}
          noOfLines={noOfLines && noOfLines}
          color="gray.500"
          fontSize="md"
        >
          {desc}
        </Text>
        {actionBtn && (
          <Box pt={4}>
            <Button colorScheme="primary.900" variant="outline" size="md">
              See Details
            </Button>
          </Box>
        )}
      </VStack>
    </Link>
  )
}

const Products: React.FC<ProductsProps> = ({}) => {
  return (
    <div id="products">
      <Box py={{ base: 8, lg: 12 }} px={4}>
        <Container maxW={"1440px"}>
          {/* Main Products */}
          <Heading
            mb={{ base: 8, lg: 12 }}
            pt={12}
            fontSize="4xl"
            color="primary.900"
            textAlign="center"
          >
            Our Products
          </Heading>
          <SimpleGrid gap={12} columns={{ base: 1, md: 2, xl: 3 }}>
            <ProductCard
              url="/v68Iradio"
              hover
              actionBtn
              noOfLines={3}
              imgSrc={v68}
              name="V68 Iradio"
              desc="Iradio V68 is the best choices for a small, light and affordable walkie talkie. At the same point, it's also provide up to 11 functions, such as additional encryption, emergency alarm etc."
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
  )
}

export default Products
