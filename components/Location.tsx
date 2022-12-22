import {
  Box,
  Heading,
  SimpleGrid,
  VStack,
  Text,
  Container,
  Flex,
} from "@chakra-ui/react"
import React from "react"
import { RiWhatsappFill } from "react-icons/ri"

interface ILocationInfoProps {
  outletName: string
  address: string
  contactNumber: string
  whatsappLink?: string
  gMapsSrc: string
}

const Location = () => {
  const locationsInfo: ILocationInfoProps[] = [
    {
      outletName: "Radiotronic Sdn Bhd (Service Centre & Head Office)",
      address:
        "Lot 7, No. 13, Industri E33 Likas,Mile 2 1/2, Jalan Tuaran, 88400 Kota Kinabalu, Sabah, Malaysia.",
      contactNumber: "+6088276818 / 0165222039",
      whatsappLink: "https://wa.link/32rkyb",
      gMapsSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.1403085197553!2d116.08163719999999!3d5.9754089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x323b6be0b91713c5%3A0xd053dfc85d02a2b1!2sRadiotronic%20Sdn%20Bhd%20(HQ)!5e0!3m2!1sen!2sus!4v1670327678765!5m2!1sen!2sus",
    },
    {
      outletName: "Radiotronic Outlet @ Damai",
      address:
        "Lot 15, Ground Floor, Lorong Pokok Kayu Manis Block D, Damai Plaza, 88300 Kota Kinabalu, Sabah.",
      contactNumber: "+6088232713 / 0168301158",
      whatsappLink: "https://wa.link/h1dvdq",
      gMapsSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15872.957488518277!2d116.08043679188062!3d5.961727772948563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x323b690804a49e51%3A0xbdfb6ce12741bd3e!2sRadiotronic%20Sdn%20Bhd%20(Damai)!5e0!3m2!1sen!2smy!4v1671521184297!5m2!1sen!2smy",
    },
    {
      outletName: "Eastcon @ ITCC Shopping Mall",
      address: "1-18B, 1st Floor, ITCC Penampang",
      contactNumber: "+6088745006 / 0162741684",
      whatsappLink: "https://wa.link/tb9r8i",
      gMapsSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15874.42946406132!2d116.08260539188028!3d5.910629875508585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x323b662a553fa4bb%3A0xdb3fdccd42560827!2sInternational%20Technology%20%26%20Commercial%20Centre%20Penampang%20(ITCC)!5e0!3m2!1sen!2smy!4v1671521818659!5m2!1sen!2smy",
    },
    {
      outletName: "Eastcon @ Komplex Karamunsing",
      address: "LG 41-48, Lower Ground Floor, Karamunsing Complex",
      contactNumber: "+6088240626 / 088247727 / 0143238618",
      whatsappLink: "https://wa.link/cgebiy",
      gMapsSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26694.466982204485!2d116.06012445315234!3d5.97320827213776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x323b69638dc0459f%3A0xe4d4e5de0156917c!2sKaramunsing%20Complex!5e0!3m2!1sen!2smy!4v1671522073388!5m2!1sen!2smy",
    },
    {
      outletName: "Eastcon @ Putatan Royal Plaza",
      address: "61 & 62, Block N, Ground Floor, Royal Plaza Putatan",
      contactNumber: " +60162741684 / 01137629338",
      whatsappLink: "https://wa.link/8vstax",
      gMapsSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15875.016349577041!2d116.04249379188013!3d5.890133676530717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x323b678e7e80879f%3A0x87a1c269892fb963!2sLorong%20Royal%20Plaza%20Putatan%2C%20Bandar%20Putatan%2C%2089500%20Putatan%2C%20Sabah!5e0!3m2!1sen!2smy!4v1671522194536!5m2!1sen!2smy",
    },
  ]
  return (
    <div id="location">
      <Box mt={{ base: 4, lg: 12 }} px={4} pb={32} mb={12}>
        <Container maxW={"1440px"}>
          <Heading
            mb={{ base: 8, lg: 12 }}
            pt={20}
            fontSize="4xl"
            color="primary.900"
            textAlign="center"
          >
            Locations
          </Heading>
          <SimpleGrid
            mb={{ base: 8, lg: 20 }}
            alignItems="center"
            columns={{ base: 1, lg: 2 }}
            gap={{ base: 4, lg: 16 }}
          >
            {locationsInfo?.map((location: any) => (
              <Box
                bg="whiteAlpha.800"
                shadow="2xl"
                borderRadius="lg"
                rounded="xl"
                key={location.outletName}
              >
                <VStack p={8}>
                  <VStack alignItems="left" gap={4} width="full">
                    <Text
                      fontSize={"2xl"}
                      fontWeight="bold"
                      color="primary.900"
                    >
                      {location.outletName}
                    </Text>
                    <Box>
                      <Text mb={2} fontWeight="700" fontSize="xl">
                        Opening hours :
                      </Text>
                      <Text fontSize="xl">Mon to Fri 8:30 AM to 5:00 PM</Text>
                    </Box>

                    <Box>
                      <Box>
                        <Text mb={2} fontWeight="700" fontSize="xl">
                          Contact :
                        </Text>
                        <Text fontSize="xl">{location.contactNumber}</Text>
                      </Box>
                      <Flex
                        mt={4}
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
                        href={location.whatsappLink}
                        justify="center"
                      >
                        <RiWhatsappFill color="white" fontSize="1.2rem" />
                        <Text fontWeight="600" color="white">
                          Whatsapp
                        </Text>
                      </Flex>
                    </Box>

                    <Box>
                      <Text mb={2} fontWeight="700" fontSize="xl">
                        Address :
                      </Text>
                      <Text fontSize="xl" pb={4}>
                        {location.address}
                      </Text>

                      <iframe
                        src={location.gMapsSrc}
                        width="100%"
                        // height="auto"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </Box>
                  </VStack>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </div>
  )
}

export default Location
