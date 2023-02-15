import lemonLogo from '../assets/images/Asset 20@4x.png'
import {
    Box,
    HStack,
    Image,
    extendTheme,
    Flex,

} from "@chakra-ui/react";
import Nav from './Nav';

const breakpoints = {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
}
const theme = extendTheme({ breakpoints })

function Header() {

    return <>
        <header >
            <HStack p={10}
                gap={100}
                display={{ md: 'flex' }}
                justifyContent="space-between"
            >
                <Box flexShrink={0}
                    display={{ sm: 'flex' }}
                    justifyContent={{ sm: "center" }}
                >
                    <Image src={lemonLogo} w='80px'
                        align="center"
                        justify="center" />
                </Box>
                <Flex
                    pt={{ sm: 10 }}
                    display={{ sm: 'flex' }}
                    justifyContent={{ sm: "center" }}
                >
                    <Nav />
                </Flex>
            </HStack>
        </header>
    </>
}

export default Header;