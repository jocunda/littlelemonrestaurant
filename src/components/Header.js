import lemonLogo from '../assets/images/Asset 16@4x.png'
import {
    Box,
    HStack,
    Image,

} from "@chakra-ui/react";
import Nav from './Nav';

function Header() {

    return <>
        <header >
            <HStack p={10} gap={180}
            >
                <Image src={lemonLogo} w='sm'
                    align="center"
                    justify="center" />
                <Nav />
            </HStack>
        </header>
    </>
}

export default Header;