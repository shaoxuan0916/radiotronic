import {
  Box,
  Heading,
  Container,
  Button,
  VStack,
  Text,
  SimpleGrid,
  Flex,
  FormControl,
  FormLabel,
  InputGroup,
  Input,
  Textarea,
} from "@chakra-ui/react"
import Image from "next/image"
import contactImg from "../public/contact.svg"
import contact2 from "../public/contact2.svg"
import { RiWhatsappFill } from "react-icons/ri"
import { useState } from "react"
import axios from "axios"

type Props = {}

const Contact = (props: Props) => {
  const [name, setName] = useState<any>("")
  const [email, setEmail] = useState<any>("")
  const [subject, setSubject] = useState<any>("")
  const [message, setMessage] = useState<any>("")
  const [msg, setMsg] = useState<string>("")
  const [submitting, setSubmitting] = useState<any>(false)
  const [submitted, setSubmitted] = useState<any>(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    if (name === "" || email === "" || subject === "" || message === "") {
      setMsg("Please fill in all fields")
      return
    }

    console.log("Sending")
    setMsg("")
    setSubmitting(true)
    let data = {
      name,
      email,
      subject,
      message,
    }

    // SendGrid Api -- rapid-api method

    fetch("api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received")
      if (res.status === 200) {
        console.log("Response succeeded!")
        setMsg("You have sumbitted your enquiry form!")
        setSubmitted(true)
        setSubmitting(false)
        setName("")
        setEmail("")
        setSubject("")
        setMessage("")
      }
    })

    // nodemailer method

    // fetch("/api/contact", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json, text/plain, */*",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // }).then((res) => {
    //   console.log("Response received")
    //   if (res.status === 200) {
    //     console.log("Response succeeded!")
    //     setMsg("You have sumbitted your enquiry form!")
    //     setSubmitted(true)
    //     setSubmitting(false)
    //     setName("")
    //     setEmail("")
    //     setSubject("")
    //     setMessage("")
    //   }
    // })
  }

  return (
    <div id="contact">
      <Box
        bgColor="primary.900"
        mt={{ base: 8, lg: 12 }}
        px={4}
        pb={32}
        mb={12}
      >
        <Container maxW={"1440px"}>
          <Heading
            mb={{ base: 8, lg: 12 }}
            pt={20}
            fontSize="4xl"
            // color="primary.900"
            color="white"
            textAlign="center"
          >
            Contact Us
          </Heading>

          {/* <SimpleGrid
            mb={{ base: 8, lg: 20 }}
            alignItems="center"
            columns={{ base: 1, lg: 2 }}
            gap={{ base: 4, lg: 16 }}
          >
            <Box mb={{ base: 8, lg: 0 }}>
              <Image src={contact2} alt="contact" priority={true} />
            </Box>
            <Box bg="white" shadow="xl" borderRadius="lg" rounded="xl">
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
              </VStack>
            </Box>
          </SimpleGrid>  */}

          <SimpleGrid
            mt={4}
            mb={{ base: 8, lg: 20 }}
            alignItems="center"
            columns={{ base: 1, lg: 2 }}
            gap={{ base: 4, lg: 16 }}
          >
            <Box display={{ base: "none", lg: "block" }}>
              <Image src={contactImg} alt="contact" priority={true} />
            </Box>
            <Box bg="whiteAlpha.800" shadow="xl" borderRadius="lg" rounded="xl">
              <Box bg="white" shadow="xl" borderRadius="lg" rounded="xl">
                <VStack color="teal.900" p={8} spacing={8} as="form">
                  <VStack alignItems="left" gap={8} width="full">
                    <FormControl width="" isRequired>
                      <FormLabel>Your Name</FormLabel>
                      <InputGroup borderColor="#E0E1E7">
                        <Input
                          type="text"
                          name="name"
                          size="md"
                          placeholder="Henry Lim"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value)
                          }}
                        />
                      </InputGroup>
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Your Email</FormLabel>
                      <InputGroup borderColor="#E0E1E7">
                        <Input
                          type="email"
                          name="email"
                          size="md"
                          placeholder="henrylim@gmail.com"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value)
                          }}
                        />
                      </InputGroup>
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Email Subject</FormLabel>
                      <InputGroup borderColor="#E0E1E7">
                        <Input
                          type="text"
                          name="subject"
                          size="md"
                          placeholder="Type your email subject here"
                          value={subject}
                          onChange={(e) => {
                            setSubject(e.target.value)
                          }}
                        />
                      </InputGroup>
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Your Messages</FormLabel>
                      <Textarea
                        name="text"
                        borderColor="gray.300"
                        _hover={{
                          borderRadius: "gray.300",
                        }}
                        placeholder="Type your messages here"
                        value={message}
                        onChange={(e) => {
                          setMessage(e.target.value)
                        }}
                      />
                      {msg && (
                        <Box
                          mt={4}
                          color={
                            msg === "Please fill in all fields"
                              ? "red"
                              : "green"
                          }
                        >
                          <Text>{msg}</Text>
                        </Box>
                      )}
                    </FormControl>
                  </VStack>

                  <Button
                    mt={8}
                    width="full"
                    variant="solid"
                    color="white"
                    bgColor="primary.700"
                    _hover={{ bgColor: "primary.900" }}
                    type="submit"
                    onClick={(e) => handleSubmit(e)}
                  >
                    {submitting ? "Submitting ..." : "Submit"}
                  </Button>
                </VStack>
              </Box>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </div>
  )
}

export default Contact
