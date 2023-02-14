import lemonFooter from '../assets/images/Asset 20@4x.png'
import { Box, Flex, Text, Center, Square, VStack } from "@chakra-ui/react";

function Footer() {
    return (
        <>
            <footer>
                <img src={lemonFooter} />
                <Flex color='white'>
                    <VStack>
                        <Text>Doormat Navigation</Text>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Menu</a></li>
                            <li><a href="">Reservations</a></li>
                            <li><a href="">Order Online</a></li>
                            <li><a href="">Login</a></li>
                        </ul>
                    </VStack>

                    <VStack>
                        <Text>Contact</Text>
                        <ul>
                            <li><a href="">Address</a></li>
                            <li><a href="">Phone Number</a></li>
                            <li><a href="">E-mail</a></li>
                        </ul>
                    </VStack>
                    <VStack>
                        <Text>Social Media Links</Text>
                        <ul>
                            <li><a href="">Address</a></li>
                            <li><a href="">Phone Number</a></li>
                            <li><a href="">E-mail</a></li>
                        </ul>
                    </VStack>
                </Flex>
            </footer>
        </>
    );
}

export default Footer;