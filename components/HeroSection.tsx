import {
  Container,
  SimpleGrid,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Box,
  Flex,
  VStack,
  Button,
  HStack,
} from "@chakra-ui/react"
import Link from "next/link"
import Image from "next/image"
import { BiLinkExternal } from "react-icons/bi"
import heroPhoto from "../public/heroEdited.png"
import MytetraLogo from "../public/MytetraLogo.png"
import iRadioLogo from "../public/iRadioLogo.png"

export default function SplitWithImage() {
  return (
    <Box
      bgColor={"gray.100"}
      h={{ lg: "100vh" }}
      pt={{ base: 32, lg: 40 }}
      pb={24}
      px={4}
    >
      <Container maxW={"1440px"}>
        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, lg: 2 }}
          spacing={10}
        >
          <Stack mt={{ base: 2, lg: 8 }} mb={{ base: 12, lg: 0 }} spacing={4}>
            <Text
              textTransform={"uppercase"}
              color={"primary.700"}
              fontWeight={700}
              fontSize={"sm"}
              shadow={"md"}
              bg={useColorModeValue("gray.100", "primary.900")}
              p={2}
              mb="2"
              as="b"
              alignSelf={"flex-start"}
              rounded={"md"}
            >
              About Us
            </Text>
            <Heading
              color="primary.900"
              as="h1"
              size={{ base: "2xl", xl: "3xl" }}
            >
              RADIOTRONIC SDN BHD
            </Heading>

            <Box pt={{ base: 4, lg: 8 }}>
              <Text
                rounded="lg"
                color={"gray.600"}
                fontSize={{ base: "xl", lg: "2xl" }}
                mt={{ base: 4, lg: 8 }}
              >
                Main Reputable Dealer of <b>Electrical Products</b> and
                <b> Electronic Components</b>.
              </Text>
            </Box>

            <Box>
              <Link href="/#contact">
                <Button
                  rounded="2xl"
                  py={8}
                  mt={{ base: 8, lg: 16 }}
                  width="full"
                  variant="solid"
                  color="white"
                  bgColor="primary.700"
                  _hover={{ bgColor: "primary.900" }}
                  type="button"
                >
                  <Text fontSize="xl">Contact Us Now!</Text>
                </Button>
              </Link>
            </Box>

            <Flex
              display={{ base: "none", lg: "flex" }}
              w="full"
              maxWidth="500px"
              gap={2}
              _hover={{ textDecoration: "underline" }}
              p={2}
              rounded="lg"
              as="a"
              cursor={"pointer"}
              target="_blank"
              align="center"
              href={"https://www.radiotronic.com.my/"}
              textAlign="left"
            >
              <BiLinkExternal color="primary.900" fontSize="1.2rem" />
              <Text fontWeight="600" color="primary.900">
                Back To Our Main Website
              </Text>
            </Flex>
          </Stack>

          <VStack alignItems="center" justify="center">
            <Image
              alt={"Radiotronic Sdn Bhd walkie talkie image"}
              src={heroPhoto}
              style={{ objectFit: "contain" }}
              priority={true}
            />

            <HStack opacity="" pt={{ base: 16, lg: 24 }} gap={4}>
              <Image
                src={iRadioLogo}
                style={{ objectFit: "contain", width: "auto", height: "30px" }}
                alt="Iradio Logo"
                priority={true}
              />
              <Image
                src={MytetraLogo}
                style={{ objectFit: "contain", width: "auto", height: "30px" }}
                alt="mytetra logo"
                priority={true}
              />
            </HStack>
          </VStack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
