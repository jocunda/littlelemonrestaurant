import lemonFooter from '../assets/images/Asset 16@4x.png'
import {
    Box,
    Flex,
    Text,
    Center,
    Square,
    VStack,
    Image,
    HStack,
    Heading,
    Divider,
    extendTheme,
} from "@chakra-ui/react";
import { FiTwitter } from "react-icons/fi"
import { BsFacebook, BsInstagram } from "react-icons/bs"

const breakpoints = {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
}
const theme = extendTheme({ breakpoints })

function Footer() {
    return (
        <>
            <footer>
                <Box p={10}
                    gap={50}
                    display={{ md: 'flex' }}
                    justifyContent="space-between"
                >
                    <Box flexShrink={0}>
                        <Image src={lemonFooter}
                            w='xs'
                            align="center"
                            justify="center" />
                    </Box>
                    <Flex gap={10} pt={{ sm: 10 }}>
                        <VStack alignItems="flex-start">
                            <Heading as='h5' size='sm' pb={3}>Doormat Navigation</Heading>
                            <a href="/">Home</a>
                            <a href="#reservations-section">Reservations</a>
                            <a href="#orderonline-section">Order Online</a>
                            <a href="#review-section">Review</a>
                            <a href="#about-section">About</a>
                            <a href="/">Login</a>
                        </VStack>
                        <VStack alignItems="flex-start">
                            <Heading as='h5' size='sm' pb={3} >Contact</Heading>
                            <a href="">Address</a>
                            <a href="">Phone Number</a>
                            <a href="">E-mail</a>
                        </VStack>
                        <VStack alignItems="flex-start">
                            <Heading as='h5' size='sm' pb={5}>Social Media</Heading>
                            <HStack gap={5} fontSize={25}>
                                <FiTwitter />
                                <BsFacebook />
                                <BsInstagram />
                            </HStack>
                        </VStack>
                    </Flex>
                </Box>
            </footer>
        </>
    );
}

export default Footer;