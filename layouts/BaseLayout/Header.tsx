import { Box, Button, HStack, Icon, Text, VStack, Flex } from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"
import Router from "next/router"
import { useState } from "react"
import { AiOutlineDown } from "react-icons/ai"
import { HiMenu } from "react-icons/hi"
import { BiLinkExternal } from "react-icons/bi"
import { RiWhatsappFill, RiFacebookFill } from "react-icons/ri"
import LogoImage from "../../public/radiotronic-logo-transparent02.png"

type Props = {}

const Header = (props: Props) => {
  const [showMenu, setShowMenu] = useState<boolean>()

  const menus = [
    {
      label: "Home",
      to: "/",
    },
    {
      label: "Our Products",
      to: "/#products",
    },
    {
      label: "Contact",
      to: "/#contact",
    },
  ]

  return (
    <Box
      position="fixed"
      zIndex={10}
      w="full"
      bgColor="gray.50"
      shadow="lg"
      px={4}
    >
      <Flex
        justify="space-between"
        alignItems="center"
        maxWidth="1440px"
        mx="auto"
        h="70px"
      >
        <HStack spacing="8">
          {/* TODO: ICON */}

          <Box
            pl={{ base: 4, lg: 0 }}
            cursor="pointer"
            onClick={() => Router.push("/")}
          >
            <Image
              src={LogoImage}
              style={{ width: "auto", height: "45px" }}
              priority={true}
              alt="logo"
            />
          </Box>

          <HStack
            pl={{ lg: "30", xl: "40" }}
            spacing="16"
            display={{ base: "none", lg: "flex" }}
          >
            {menus.map((menu) => (
              <Box key={menu.label}>
                <Link href={menu.to}>
                  <Text
                    fontSize={20}
                    cursor="pointer"
                    color="primary.900"
                    _hover={{ color: "primary.500" }}
                  >
                    {menu.label}
                  </Text>
                </Link>
              </Box>
            ))}
          </HStack>
        </HStack>

        <HStack gap={4}>
          <Flex
            display={{ base: "none", lg: "flex" }}
            gap={2}
            p={2}
            rounded="lg"
            border="1px solid #3b5998"
            as="a"
            cursor={"pointer"}
            target="_blank"
            align="center"
            _hover={{ bgColor: "blue.50" }}
            href={"https://www.facebook.com/radiotronicstore"}
          >
            <RiFacebookFill color="#3b5998" fontSize="1.2rem" />
            <Text fontWeight="600" color="#3b5998">
              Facebook
            </Text>
          </Flex>
          <Flex
            display={{ base: "none", lg: "flex" }}
            gap={2}
            p={2}
            rounded="lg"
            border="1px solid #128c7e"
            as="a"
            cursor={"pointer"}
            target="_blank"
            align="center"
            _hover={{ bgColor: "green.50" }}
            href="https://wa.link/32rkyb"
          >
            <RiWhatsappFill color="#128c7e" fontSize="1.2rem" />
            <Text fontWeight="600" color="#128c7e">
              Whatsapp
            </Text>
          </Flex>
        </HStack>

        {/* Mobile Menu*/}

        <Button
          display={{ base: "flex", lg: "none" }}
          rightIcon={
            <Box
              transform={`rotate(${showMenu ? 180 : 0}deg)`}
              transition="transform ease-in-out 300ms"
            >
              <AiOutlineDown size={20} />
            </Box>
          }
          variant="ghost"
          onClick={() => setShowMenu(!showMenu)}
        >
          <HiMenu size={20} />
        </Button>
      </Flex>

      {showMenu && (
        <Box
          mt={16}
          py={4}
          bg=""
          shadow="lg"
          bgColor="gray.50"
          position="absolute"
          left={0}
          top={0}
          width="100%"
        >
          <VStack spacing="8" alignItems="center" justifyContent="center" p="4">
            {menus.map((menu) => (
              <Box
                key={menu.label}
                fontSize={20}
                _hover={{ color: "primary.900" }}
                onClick={() => setShowMenu(false)}
              >
                <Link href={menu.to}>{menu.label}</Link>
              </Box>
            ))}

            <Flex
              w="full"
              maxWidth="500px"
              gap={2}
              p={2}
              rounded="lg"
              border="1px solid #128c7e"
              as="a"
              cursor={"pointer"}
              target="_blank"
              align="center"
              href="https://wa.link/32rkyb"
              justify="center"
            >
              <RiWhatsappFill color="#128c7e" fontSize="1.2rem" />
              <Text fontWeight="600" color="#128c7e">
                Whatsapp
              </Text>
            </Flex>
            <Flex
              w="full"
              maxWidth="500px"
              gap={2}
              p={2}
              rounded="lg"
              border="1px solid #3b5998"
              as="a"
              cursor={"pointer"}
              target="_blank"
              align="center"
              href={"https://www.facebook.com/radiotronicstore"}
              justify="center"
            >
              <RiFacebookFill color="#3b5998" fontSize="1.2rem" />
              <Text fontWeight="600" color="#3b5998">
                Facebook
              </Text>
            </Flex>

            <Flex
              w="full"
              maxWidth="500px"
              gap={2}
              p={2}
              rounded="lg"
              bgColor={"primary.900"}
              as="a"
              cursor={"pointer"}
              target="_blank"
              align="center"
              href={"https://www.radiotronic.com.my/"}
              justify="center"
            >
              <BiLinkExternal color="white" fontSize="1.2rem" />
              <Text fontWeight="600" color="white">
                Back To Our Main Website
              </Text>
            </Flex>
          </VStack>
        </Box>
      )}
    </Box>
  )
}

export default Header
