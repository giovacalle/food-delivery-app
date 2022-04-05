import { useState, useReducer } from "react";

const initialInputState = {
    value: '',
    isTouched: false
};
const inputStateReducer = (state, action) => {
    switch (action.type) {
        case 'INPUT':
            return { ...state, value: action.value };
            break;
        case 'BLUR':
            return { ...state, isTouched: true };
            break;
        case 'RESET':
            return initialInputState;
            break;
        default:
            return initialInputState;
            break;
    }
};

const useInput = (validateValue) => {
    const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);
    // const [enteredValue, setEnteredValue] = useState('');
    // const [isTouched, setIsTouched] = useState(false); --> change with useReducer

    const valueIsValid = validateValue(inputState.value);
    const hasError = !valueIsValid && inputState.isTouched;

    const valueChangeHandler = (event) => {
        dispatch({ type: 'INPUT', value: event.target.value });
        // setEnteredValue(event.target.value);
    };

    const inputBlurHandler = event => {
        // setIsTouched(true);
        dispatch({ type: 'BLUR' });
    };

    const reset = () => {
        // setEnteredValue('');
        // setIsTouched(false);
        dispatch({ type: 'RESET' });
    };

    return {
        value: inputState.value,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    };
};

export default useInput;