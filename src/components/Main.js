
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Text,
    Select,
    Textarea,
    VStack,
    CardBody,
    Stack,
    CardHeader,
    CardFooter,
    ButtonGroup,
    Image,
    Card,
    HStack,
    Divider,
    extendTheme,
    Flex

} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaMotorcycle } from 'react-icons/fa'

const menus = [
    {
        title: "Greek Salad",
        price: 12.99,
        description:
            "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
        getImageSrc: () => require("../images/menu1.jpg"),
    },
    {
        title: "Bruchetta",
        price: 5.99,
        description:
            "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
        getImageSrc: () => require("../images/menu2.jpg"),
    },
    {
        title: "Lemon Dessert",
        price: 5.00,
        description:
            "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        getImageSrc: () => require("../images/menu3.jpg"),
    },
];

const testimonials = [
    {
        rating: "⭐⭐⭐⭐",
        name: "Tony",
        review:
            "Velit deserunt tempor et pariatur dolore labore.",
        getImageSrc: () => require("../images/avatar1.jpg"),
    },
    {
        rating: "⭐⭐⭐⭐⭐",
        name: "Lucy",
        review:
            "Ex deserunt est minim tempor sunt laboris Lorem.",
        getImageSrc: () => require("../images/avatar2.jpg"),
    },
    {
        rating: "⭐⭐⭐",
        name: "Marta",
        review:
            "Officia proident reprehenderit et duis veniam.",
        getImageSrc: () => require("../images/avatar3.jpg"),
    },
    {
        rating: "⭐⭐⭐⭐⭐",
        name: "Billy",
        review:
            "Magna elit incididunt occaecat labore et sit anim do mollit.",
        getImageSrc: () => require("../images/avatar4.jpg"),
    },
];

const breakpoints = {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
}
const theme = extendTheme({ breakpoints })

function Main() {

    return (
        <>
            <main>
                <section>
                    <Box
                        p={10}
                        bgImage={require("../assets/images/section1a.jpg")}
                        bgRepeat="no-repeat"
                        bgPosition="bottom"
                        bgSize="cover"
                        height={450}
                        textAlign="start"
                        display="flex"
                        alignItems="center"
                    >
                        <VStack display="flex" alignItems="flex-start">
                            <Heading as="h1" id="reservations-section">
                                Little Lemon
                            </Heading>
                            <Heading as='h4' size='md'>
                                Chicago
                            </Heading>
                            <Text w="80%" py={5}>Adipisicing sint Lorem esse cillum tempor amet amet elit nostrud culpa cupidatat. Eu tempor duis nisi proident officia duis laborum. Mollit sint adipisicing sunt ad eiusmod ut voluptate fugiat elit minim. Laboris quis Lorem enim ad velit laborum.</Text>
                            <Link to={"/booking"}>
                                <Button colorScheme='teal' size='md'>
                                    Reserve a Table
                                </Button>
                            </Link>
                        </VStack>
                    </Box>
                </section>
                <section>
                    <VStack p={10}>
                        <HStack gap={50}>
                            <Heading as="h1" id="orderonline-section" py={10}>
                                Specials
                            </Heading>
                            <Button colorScheme='teal' size='md'>
                                Online Menu
                            </Button>
                        </HStack>
                        <Box spacing={5}
                            display={{ md: 'flex' }}
                            flexWrap="wrap"
                            gap={5}
                        >
                            {menus.map((menu) => (
                                <Card w="350px"
                                    key={menu.title}
                                    alignSelf="flex-start"
                                    mt={{ sm: 5 }}

                                >
                                    <CardBody>
                                        <Image
                                            src={menu.getImageSrc()}
                                            borderRadius='lg'
                                        />
                                        <Stack mt='6' spacing='3'>
                                            <HStack display="flex" justifyContent="space-between">
                                                <Heading size='md'>{menu.title}</Heading>
                                                <Text color='blue.600' fontSize='2xl'>
                                                    $ {menu.price}
                                                </Text>
                                            </HStack>

                                            <Text>
                                                {menu.description}
                                            </Text>

                                        </Stack>
                                    </CardBody>
                                    <CardFooter>
                                        <ButtonGroup spacing='2'>
                                            <Button variant='solid' colorScheme='facebook'>
                                                Order delivery
                                            </Button>
                                            <Button fontSize={30} variant='ghost'><FaMotorcycle /></Button>
                                        </ButtonGroup>
                                    </CardFooter>
                                </Card>
                            ))}
                        </Box>
                    </VStack>
                </section>
                <section>
                    <Box p={10}>
                        <Heading as="h1" id="review-section" textAlign="center" py={10}>
                            Testimonials
                        </Heading>
                        <HStack justify="center">
                            {testimonials.map((testimonial) => (
                                <Card
                                    w="200px"
                                    key={testimonial.name}
                                    variant='outline'
                                    display="flex"
                                    alignSelf="flex-start"
                                >
                                    <CardBody display="flex"
                                        alignItems="center"
                                        flexWrap="wrap"
                                        gap={2}
                                    >
                                        <Text>
                                            {testimonial.rating}
                                        </Text>
                                        <Divider />
                                        <Image
                                            objectFit='cover'
                                            maxW={50}
                                            src={testimonial.getImageSrc()}
                                        />
                                        <Text size='md'>{testimonial.name}</Text>
                                    </CardBody>
                                    <CardFooter>
                                        <Text size='xs' textAlign="justify">
                                            {testimonial.review}
                                        </Text>
                                    </CardFooter>
                                </Card>
                            ))}
                        </HStack>
                    </Box>
                </section>
                <section>
                    <Box
                        p={10}
                        bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)"
                        width="100%"
                    >
                        <Box p={4} display={{ md: 'flex' }} gap={10}>
                            <VStack>
                                <Heading as="h1" id="about-section">
                                    Little Lemon
                                </Heading>
                                <Heading as='h4' size='md' pb={10} >
                                    Chicago
                                </Heading>
                                <Text>Sunt consectetur mollit do officia magna deserunt consequat ipsum laboris culpa sit reprehenderit officia culpa. Minim adipisicing commodo excepteur Lorem commodo cillum minim minim tempor et incididunt voluptate. Nisi amet voluptate amet excepteur. Do dolor eiusmod qui quis est fugiat enim ea enim incididunt. Cillum eiusmod cupidatat eiusmod non dolore. Incididunt amet Lorem non pariatur velit occaecat ex voluptate enim proident. Cupidatat esse laboris duis labore eu ipsum ad duis.</Text>
                            </VStack>
                            <Box flexShrink={0} pt={{ sm: 10 }}>
                                <Image src={require("../assets/images/section4.jpg")} />
                            </Box>
                        </Box>
                    </Box>
                </section>
            </main>
        </>
    );
}

export default Main;