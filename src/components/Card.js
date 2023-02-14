import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FaMotorcycle } from 'react-icons/fa'

const Card = ({ title, description, imageSrc }) => {
    return (
        <Heading>
            <HStack>
                <VStack align="start"
                    backgroundColor="white"
                    borderRadius="10px"
                >
                    <Image src={imageSrc}
                        boxSize='100px'
                        borderRadius="10px"
                        objectFit='cover'
                    />
                    <Text fontSize='lg'
                        color="black"
                        padding="5px"
                    >{title}</Text>
                    <Text fontSize='xs'
                        textAlign="justify"
                        color="grey"
                        padding="5px"
                        fontWeight="400"
                    >{description}</Text>
                    <HStack color="black"
                        padding="0px 5px 10px 5px"
                        fontWeight="500"
                        fontSize='xs'
                    >
                        <Text>Order a delivery</Text>
                        <FaMotorcycle />
                    </HStack>
                </VStack>
            </HStack>
        </Heading>
    );
};

export default Card;
