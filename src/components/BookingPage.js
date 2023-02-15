import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Select,
    Textarea,
    VStack,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    HStack

} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { AiOutlineHome } from "react-icons/ai"
import { Link } from "react-router-dom";
import UpdateTimes from "./UpdateTimes";



function BookingPage() {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            email: '',
            type: '',
            comment: '',
        },
        onSubmit: (values) => {

        },
        validationSchema: Yup.object().shape({
            firstName: Yup.string()
                .min(2, 'First name must be at least 2 characters long')
                .required("Required"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
            type: Yup.string(),
            comment: Yup.string()
                .min(25, "Must be at least 25 characters")
                .required("Required"),
        }),

    });

    return <>

        <VStack p={32} alignItems="flex-start">
            <HStack display="flex"
                w="100%"
                justifyContent="space-between"
            >
                <Heading as="h1">
                    Reservation
                </Heading>
                <Link to={"/"}><Button fontSize={25} p={5}><AiOutlineHome /></Button></Link>
            </HStack>

            <Box p={6}
                rounded="md"
                w="100%"
            >
                <form onSubmit={(e) => {
                    e.preventDefault()
                    formik.handleSubmit(e)
                }}>
                    <VStack spacing={4}>
                        <HStack>
                            <UpdateTimes />
                        </HStack>

                        <FormControl>
                            <FormLabel htmlFor="guests">Number of guests</FormLabel>
                            <NumberInput max={10} min={1}>
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </FormControl>

                        <FormControl>
                            <FormLabel htmlFor="occasion">Occasion</FormLabel>
                            <Select id="occasion" name="occasion" >
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </Select>
                        </FormControl>

                        <Button
                            type="submit"
                            colorScheme="teal"
                            size='lg'
                            py={8}>
                            Make Your Reservation
                        </Button>
                    </VStack>
                </form>
            </Box>
        </VStack>

    </>

}

export default BookingPage;