import { useReducer } from "react";

const initialInputState = {
    value: '',
    isTouched: false
};
const inputStateReducer = (state, action) => {
    let initialState = initialInputState;

    switch (action.type) {
        case 'INPUT':
            initialState = { ...state, value: action.value };
            break;
        case 'BLUR':
            initialState = { ...state, isTouched: true };
            break;
        default:
            break;
    }

    return initialState;
};

const useInput = (validateValue) => {
    const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);

    const valueIsValid = validateValue(inputState.value);
    const hasError = !valueIsValid && inputState.isTouched;

    const valueChangeHandler = (event) => {
        dispatch({ type: 'INPUT', value: event.target.value });
    };

    const inputBlurHandler = event => {
        dispatch({ type: 'BLUR' });
    };

    const reset = () => {
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