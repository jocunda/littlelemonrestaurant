import { useState } from "react";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchData = async () => {
    try {
        const response = await fetch('https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

const useSubmit = () => {
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const submit = async (url, data) => {
        const random = Math.random();
        setLoading(true);
        try {
            await wait(2000);
            if (false) {
                throw new Error("Something went wrong");
            }
            setResponse({
                type: 'success',
                message: `Thank you ${data.name}, booking was successfully submitted!`,
            })

        } catch (error) {
            setResponse({
                type: 'error',
                message: 'Booking submission failed.',
            })
        } finally {
            setLoading(false);
        }
    };

    return { loading, response, submit };
}

export default useSubmit;
