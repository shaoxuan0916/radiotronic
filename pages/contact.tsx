import React, { useState } from "react"
import {
  Box,
  Heading,
  Container,
  VStack,
  Text,
  SimpleGrid,
  FormControl,
  FormLabel,
  InputGroup,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react"
import Image from "next/image"
import contact2 from "../public/contact2.svg"
import Head from "next/head"
import Location from "../components/Location"

const contact = () => {
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
  }
  return (
    <>
      <Head>
        <title>Contact Us｜Radiotronic Sdn Bhd</title>
        <meta
          content="contact us | banting communications"
          property="og:title"
        />
        <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href="https://www.radiotronicwalkietalkie.com.my/contact"
        />
      </Head>
      <div>
        <Box bgColor="gray.100" py={{ base: 8, lg: 12 }} px={4}>
          <Container maxW={"1440px"}>
            <Heading
              mb={{ base: 8, lg: 20 }}
              pt={20}
              fontSize="4xl"
              color="teal.900"
              textAlign="center"
            >
              Contact Us
            </Heading>

            <SimpleGrid
              alignItems="center"
              columns={{ base: 1, lg: 2 }}
              gap={{ base: 4, lg: 16 }}
            >
              <Box display={{ base: "none", lg: "flex" }}>
                <Image src={contact2} alt="contact" priority={true} />
              </Box>
              <Box
                bg="whiteAlpha.800"
                shadow="xl"
                borderRadius="lg"
                rounded="xl"
              >
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

        <Location />
      </div>
    </>
  )
}

export default contact
