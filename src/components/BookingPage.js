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
    HStack,
    Text,
    Alert,
    AlertIcon,

} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { AiOutlineHome } from "react-icons/ai"
import UpdateTimes from "./UpdateTimes";
import useSubmit from "../hooks/useSubmit";
import { useEffect } from "react";



function BookingPage() {
    const { loading, response, submit } = useSubmit();

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            date: '',
            time: '',
            guests: 0,
            occasion: ''
        },
        onSubmit: (values) => {
            submit(values)
        },
        validationSchema: Yup.object().shape({
            name: Yup.string()
                .min(2, 'name must be at least 2 characters long')
                .required("Required"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
            date: Yup.string(),
            time: Yup.string(),
            guests: Yup.string()
                .min(1, "Must be at least 1 guest")
                .max(10, "Maximum 10 guests")
                .required("Required"),
            occasion: Yup.string()
        }),

    });

    useEffect(() => {
        if (response) {
            if (response.type === "success") {
                formik.resetForm()
            }
        }
    }, [response])

    return <>
        {response ?
            <Alert status={response.type}>
                <AlertIcon />
                {response.message}
            </Alert>
            : ""}
        <VStack p={32} alignItems="flex-start">
            <HStack display="flex"
                w="100%"
                justifyContent="space-between"
            >
                <Heading as="h1">
                    Reservation
                </Heading>
                <Button fontSize={25} p={5}><a href="/"><AiOutlineHome /></a></Button>
            </HStack>

            <Box p={6}
                rounded="md"
                w="100%"
            >
                <form onSubmit={(e) => {
                    e.preventDefault()
                    formik.handleSubmit(e)
                }}>
                    <VStack
                        spacing={4}
                    >
                        <FormControl isInvalid={formik.touched.name && formik.errors.name}>
                            <FormLabel htmlFor="name">Name</FormLabel>
                            <Input
                                id="name"
                                name="name"
                                {...formik.getFieldProps('name')}
                            />
                            {formik.errors.name ? <FormErrorMessage>{formik.errors.name}</FormErrorMessage> : null}
                        </FormControl>
                        <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                            <FormLabel htmlFor="email">Email Address</FormLabel>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                {...formik.getFieldProps('email')}
                            />
                            {formik.errors.email ? <FormErrorMessage>{formik.errors.email}</FormErrorMessage> : null}
                        </FormControl>

                        <HStack width="100%">
                            <UpdateTimes />
                        </HStack>

                        <FormControl isInvalid={formik.touched.guests && formik.errors.guests}>
                            <FormLabel htmlFor="guests">Number of guests</FormLabel>
                            <NumberInput max={10} min={1}>
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                            {formik.errors.guests ? <FormErrorMessage>{formik.errors.guests}</FormErrorMessage> : null}
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="occasion">Occasion</FormLabel>
                            <Select id="occasion" name="occasion" >
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </Select>
                        </FormControl>

                        {loading ? <Button
                            isLoading
                            loadingText='Loading'
                            colorScheme="teal"
                            size='lg'
                            width="250px"
                            py={8}>
                        </Button> :
                            <Button
                                type="submit"
                                colorScheme="teal"
                                size='lg'
                                width="250px"
                                py={8}>
                                Make Your Reservation
                            </Button>}
                    </VStack>
                </form>
            </Box>
        </VStack>

    </>

}

export default BookingPage;