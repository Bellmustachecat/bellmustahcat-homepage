import { Container, Box, Heading } from '@chakra-ui/react'
const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="yellow" p={3} mb={6} align="center">
        Hello, I&apos;m a full-stack developer based in Thailand!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Noppadol Chanangwan
          </Heading>
          <p>Digital Craftsman ( Developer 🧑🏻‍💻)</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
