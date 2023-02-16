import { useState } from "react";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function (date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
        if (random() < 0.5) {
            result.push(i + ':00');
        }
        if (random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};
const submitAPI = function (formData) {
    return true;
};

const useSubmit = () => {
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);


    const submit = async (url, data) => {
        setLoading(true);
        try {
            await wait(2000);
            const bookingSlots = fetchAPI(new Date());
            if (bookingSlots.length > 0) {
                const success = submitAPI(data);
                if (success) {
                    setResponse({
                        type: 'success',
                        message: `Thanks for your submission, we will get back to you shortly!`,
                    });
                } else {
                    setResponse({
                        type: 'error',
                        message: 'Booking submission failed.',
                    });
                }
            } else {
                setResponse({
                    type: 'error',
                    message: 'No available booking slots.',
                });
            }

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
