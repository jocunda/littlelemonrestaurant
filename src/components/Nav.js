
import { Box, HStack } from "@chakra-ui/react";

function Nav() {

    const handleClick = (anchor) => () => {
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <>
            <nav>
                <HStack spacing={8}>
                    <a href="/">Home</a>
                    <a href="#reservations-section">Reservations</a>
                    <a href="#orderonline-section">Order Online</a>
                    <a href="#review-section">Review</a>
                    <a href="#about-section">About</a>
                    <a href="/">Login</a>
                </HStack>
            </nav>
        </>
    );
}

export default Nav;