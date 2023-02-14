import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";

const TestimonialCard = ({ rating, name, review, imageSrc }) => {
    return (
        <Heading>
            <HStack>
                <VStack align="start"
                    backgroundColor="white"
                    borderRadius="10px"

                >
                    <Image src={imageSrc} borderRadius="10px" />
                    <Text fontSize='lg'
                        color="black"
                        padding="5px"
                    >{rating}</Text>
                    <Text fontSize='xs'
                        textAlign="justify"
                        color="grey"
                        padding="5px"
                        fontWeight="400"
                    >{name}</Text>
                    <Text fontSize='xs'
                        textAlign="justify"
                        color="grey"
                        padding="5px"
                        fontWeight="400"
                    >{review}</Text>
                    <HStack color="black"
                        padding="0px 5px 10px 5px"
                        fontWeight="500"
                        fontSize='xs'
                    >
                    </HStack>
                </VStack>
            </HStack>
        </Heading>
    );
};

export default TestimonialCard;
