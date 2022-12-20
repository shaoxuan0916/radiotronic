import {
  Box,
  chakra,
  Container,
  Flex,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react"
import { ReactNode } from "react"
import { BiLinkExternal } from "react-icons/bi"
import Image from "next/image"
import logo from "../public/logo-radiotronic.png"

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      target="_blank"
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function SmallCentered() {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"1440px"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Image
          src={logo}
          style={{ objectFit: "contain", height: "40px", width: "auto" }}
          alt="radiotronic sdn bhd logo"
          priority={true}
        />
        <Stack direction={"row"} spacing={6}>
          <Link href={"/"}>Home</Link>
          <Link href={"/#products"}>Products</Link>
          <Link href={"/#contact"}>Contact</Link>
          <Link href={"/#location"}>Location</Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Box>
            <Text>Copyright © 2022 Radiotronic Sdn Bhd</Text>
            <Text pb={4} textAlign={{ base: "center", md: "left" }} ml={5}>
              All rights reserved
            </Text>
          </Box>

          <Flex
            w="full"
            maxWidth="500px"
            gap={2}
            p={2}
            rounded="lg"
            as="a"
            cursor={"pointer"}
            target="_blank"
            align="center"
            href={"https://www.radiotronic.com.my/"}
            justify="center"
          >
            <BiLinkExternal color="primary.900" fontSize="1.2rem" />
            <Text fontWeight="600" color="primary.900">
              Back To Our Main Website
            </Text>
          </Flex>
        </Container>
      </Box>
    </Box>
  )
}
