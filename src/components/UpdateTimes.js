import { useState, useReducer } from 'react';
import {
    FormControl,
    FormLabel,
    Input,
    Select,
} from "@chakra-ui/react";

const initializeTimes = {
    time: ["17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
    ]
}

function reducer(state, action) {
    switch (action.type) {
        case "2023-02-15":
            return {
                ...state, time: ["20:00", "21:00"]
            }
        case "2023-02-16":
            return {
                ...state, time: ["17:00", "19:00"]
            }
        case "2023-02-17":
            return {
                ...state, time: ["18:00", "20:00", "21:00"]
            }
        default:
            return {
                ...state, time: ["17:00", "18:00", "19:00", "20:00",
                    "21:00"]
            }
    }
}



function UpdateTimes() {
    const [state, dispatch] = useReducer(reducer, initializeTimes);
    const [date, setDate] = useState("")



    function handleDataChange(e) {
        const newDate = e.target.value;
        setDate(newDate);
        dispatch({ type: newDate });
    }

    return <>
        <FormControl >
            <FormLabel htmlFor="res-date">Choose Date</FormLabel>
            <Input type="date"
                id="res-date"
                name="res-date"
                value={date}
                onChange={handleDataChange}
            />
        </FormControl>
        <FormControl>
            <FormLabel htmlFor="res-time">Choose Time</FormLabel>
            <Select id="res-time" name="res-time">
                {state.time.map((time) => (
                    <option key={time}>{time}</option>
                ))}
            </Select>
        </FormControl>
    </>
};


export default UpdateTimes;

