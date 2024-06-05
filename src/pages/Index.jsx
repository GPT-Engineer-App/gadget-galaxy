import { Box, Container, Flex, Heading, Image, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">ElectroShop</Heading>
        <Flex>
          <Link href="/" p={2}>Home</Link>
          <Link href="/products" p={2}>Products</Link>
          <Link href="/about" p={2}>About Us</Link>
          <Link href="/contact" p={2}>Contact Us</Link>
        </Flex>
      </Flex>

      {/* Hero Section */}
      <Box bg="blue.700" color="white" py={20} textAlign="center">
        <Heading as="h2" size="2xl" mb={4}>Welcome to ElectroShop</Heading>
        <Text fontSize="xl">Your one-stop shop for the latest electronics</Text>
      </Box>

      {/* Products Section */}
      <Box py={10}>
        <Heading as="h3" size="xl" textAlign="center" mb={10}>Featured Products</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="/images/sample-product-1.jpg" alt="Sample Product 1" />
            <Box p={6}>
              <Heading as="h4" size="md" mb={2}>Smartphone XYZ</Heading>
              <Text mb={4}>A modern smartphone with all the latest features.</Text>
              <Text fontWeight="bold">$799.99</Text>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="/images/sample-product-2.jpg" alt="Sample Product 2" />
            <Box p={6}>
              <Heading as="h4" size="md" mb={2}>Laptop ABC</Heading>
              <Text mb={4}>A high-end laptop for all your computing needs.</Text>
              <Text fontWeight="bold">$1299.99</Text>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="/images/sample-product-3.jpg" alt="Sample Product 3" />
            <Box p={6}>
              <Heading as="h4" size="md" mb={2}>Smartwatch 123</Heading>
              <Text mb={4}>A sleek smartwatch to keep you connected on the go.</Text>
              <Text fontWeight="bold">$199.99</Text>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Footer */}
      <Box bg="blue.800" color="white" py={10} mt={10}>
        <Flex justifyContent="center" mb={4}>
          <Link href="https://facebook.com" isExternal mx={2}><FaFacebook size="24" /></Link>
          <Link href="https://twitter.com" isExternal mx={2}><FaTwitter size="24" /></Link>
          <Link href="https://instagram.com" isExternal mx={2}><FaInstagram size="24" /></Link>
        </Flex>
        <Text textAlign="center">&copy; 2023 ElectroShop. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;