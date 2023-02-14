
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
            "Mollit magna nulla ullamco elit quis deserunt mollit ut non proident consequat cupidatat. Cillum enim irure et veniam dolore sit proident in exercitation qui et amet. Exercitation adipisicing cillum elit esse anim dolore pariatur. Magna laborum aliquip pariatur officia velit fugiat proident adipisicing Lorem eu culpa velit enim consectetur. ",
        getImageSrc: () => require("../images/avatar1.jpg"),
    },
    {
        rating: "⭐⭐⭐⭐⭐",
        name: "Lucy",
        review:
            "Incididunt officia qui amet ipsum sint incididunt culpa ut consequat enim id. Ex tempor commodo consectetur do est nisi in Lorem ullamco cillum. Fugiat adipisicing sint ipsum quis sit cillum cillum ut nulla exercitation. Do esse nostrud incididunt duis irure.",
        getImageSrc: () => require("../images/avatar2.jpg"),
    },
    {
        rating: "⭐⭐⭐",
        name: "Marta",
        review:
            "Cillum nisi minim ipsum voluptate aute aute labore ea. Commodo dolore occaecat minim elit fugiat do veniam excepteur adipisicing sint eu. Eu exercitation veniam duis duis voluptate mollit veniam proident dolor proident labore voluptate sit ex.",
        getImageSrc: () => require("../images/avatar3.jpg"),
    },
    {
        rating: "⭐⭐⭐⭐⭐",
        name: "Billy",
        review:
            "Ea aute aute aute elit tempor adipisicing consectetur ea. Et ex exercitation incididunt non aliqua ipsum nisi dolore consequat laborum commodo voluptate. Minim eiusmod id dolore consectetur cupidatat veniam excepteur nisi ea excepteur id excepteur ea. Labore voluptate officia reprehenderit qui Lorem enim nulla laborum in anim quis ut officia dolore. Commodo eiusmod id culpa elit enim ut aute culpa duis ad et. Veniam elit aute ullamco voluptate ipsum cupidatat.",
        getImageSrc: () => require("../images/avatar4.jpg"),
    },
];



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
                        height={350}
                        textAlign="center"
                        display="flex"
                        alignContent="center"
                    >
                        <HStack gap={5}>
                            <VStack>
                                <Heading as="h1" id="reservations-section">
                                    Little Lemon
                                </Heading>
                                <h3>Chicago</h3>
                                <p>Fugiat proident voluptate sint dolor ipsum sint dolor aliqua deserunt quis exercitation ullamco ipsum. Do id reprehenderit irure esse amet. Qui minim officia occaecat aliqua eiusmod sunt duis duis.</p>
                                <Link to={"/booking"}>
                                    <Button colorScheme='teal' size='md'>
                                        Reserve a Table
                                    </Button>
                                </Link>
                            </VStack>
                        </HStack>

                    </Box>
                </section>
                <section>
                    <VStack p={10}>
                        <HStack>
                            <Heading as="h1" id="orderonline-section" py={10}>
                                Specials
                            </Heading>
                            <Button colorScheme='teal' size='md'>
                                Online Menu
                            </Button>
                        </HStack>
                        <HStack spacing={5}>
                            {menus.map((menu) => (

                                <Card w="100%" key={menu.title}>
                                    <CardBody>
                                        <Image
                                            src={menu.getImageSrc()}
                                            borderRadius='lg'
                                        />
                                        <Stack mt='6' spacing='3'>
                                            <Heading size='md'>{menu.title}</Heading>
                                            <Text>
                                                {menu.description}
                                            </Text>
                                            <Text color='blue.600' fontSize='2xl'>
                                                {menu.price}
                                            </Text>
                                        </Stack>
                                    </CardBody>
                                    <CardFooter>
                                        <ButtonGroup spacing='2'>
                                            <Button variant='solid' colorScheme='blue'>
                                                Order a delivery
                                            </Button>
                                            <FaMotorcycle />
                                        </ButtonGroup>
                                    </CardFooter>
                                </Card>

                            ))} </HStack>
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
                    >
                        <HStack gap={10}>
                            <VStack>
                                <Heading as="h1" id="about-section">
                                    Little Lemon
                                </Heading>
                                <h3>Chicago</h3>
                                <p>Fugiat proident voluptate sint dolor ipsum sint dolor aliqua deserunt quis exercitation ullamco ipsum. Do id reprehenderit irure esse amet. Qui minim officia occaecat aliqua eiusmod sunt duis duis.</p>
                            </VStack>
                            <Image src={require("../assets/images/section4.jpg")} />
                        </HStack>
                    </Box>
                </section>
            </main>
        </>
    );
}

export default Main;