import { isFocusable } from "@testing-library/user-event/dist/utils";
import useInput from "../../../hooks/use-input";

import classes from './CartCheckout.module.css';

const isNotEmpty = value => value.trim() !== '';
const isNotNumeric = value => isNotEmpty(value) && !isNaN(value);
const isEmail = value => value.includes('@');

const BasicForm = (props) => {
  const { 
    value: firstNameValue, 
    isValid: firstNameIsValid,
    hasError: firstNameHasError, 
    valueChangeHandler: firstNameChangeHandler, 
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName
  } = useInput(isNotEmpty);

  const { 
    value: lastNameValue, 
    isValid: lastNameIsValid,
    hasError: lastNameHasError, 
    valueChangeHandler: lastNameChangeHandler, 
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName
  } = useInput(isNotEmpty);

  const { 
    value: emailValue, 
    isValid: emailIsValid,
    hasError: emailHasError, 
    valueChangeHandler: emailChangeHandler, 
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail
  } = useInput(isEmail);

  const { 
    value: addressValue, 
    isValid: addressIsValid,
    hasError: addressHasError, 
    valueChangeHandler: addressChangeHandler, 
    inputBlurHandler: addressBlurHandler,
    reset: resetAddress
  } = useInput(isNotEmpty);

  const { 
    value: cityValue, 
    isValid: cityIsValid,
    hasError: cityHasError, 
    valueChangeHandler: cityChangeHandler, 
    inputBlurHandler: cityBlurHandler,
    reset: resetCity
  } = useInput(isNotEmpty);

  const { 
    value: zipCodeValue, 
    isValid: zipCodeIsValid,
    hasError: zipCodeHasError, 
    valueChangeHandler: zipCodeChangeHandler, 
    inputBlurHandler: zipCodeBlurHandler,
    reset: resetZipCode
  } = useInput(isNotEmpty && isNotNumeric);

  const formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid && addressIsValid && cityIsValid && zipCodeIsValid;

  const checkOutHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    resetFirstName();
    resetLastName();
    resetEmail();
    resetAddress();
    resetCity();
    resetZipCode();

    props.onConfirm({
      firstName: firstNameValue,
      lastName: lastNameValue,
      email: emailValue,
      address: addressValue,
      city: cityValue,
      zipCode: zipCodeValue
    });
  };

  return (
    <form className={classes['form-checkout']} onSubmit={checkOutHandler}>
      <div className={classes['form-group']}>
        <div className={`${classes['form-control']} ${firstNameHasError && 'invalid'}`}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={firstNameValue} onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler} />
          {firstNameHasError && (
            <p className={classes['error-text']}>First name invalid.</p>
          )}
        </div>
        <div className={`${classes['form-control']} ${lastNameHasError && 'invalid'}`}>
          <label htmlFor='lastname'>Last Name</label>
          <input type='text' id='lastname' value={lastNameValue} onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler} />
          {lastNameHasError && (
            <p className={classes['error-text']}>Last name invalid.</p>
          )}
        </div>
        <div className={`${classes['form-control']} ${emailHasError && 'invalid'}`}>
          <label htmlFor='email'>E-Mail Address</label>
          <input type='email' id='email' value={emailValue} onChange={emailChangeHandler} onBlur={emailBlurHandler} />
          {emailHasError && (
            <p className={classes['error-text']}>Invalid email.</p>
          )}
        </div>
        <div className={`${classes['form-control']} ${addressHasError && 'invalid'}`}>
          <label htmlFor='address'>Address</label>
          <input type='text' id='address' value={addressValue} onChange={addressChangeHandler} onBlur={addressBlurHandler} />
          {addressHasError && (
            <p className={classes['error-text']}>Invalid address.</p>
          )}
        </div>
        <div className={`${classes['form-control']} ${cityHasError && 'invalid'}`}>
          <label htmlFor='city'>City</label>
          <input type='text' id='city' value={cityValue} onChange={cityChangeHandler} onBlur={cityBlurHandler} />
          {cityHasError && (
            <p className={classes['error-text']}>Invalid city.</p>
          )}
        </div>
        <div className={`${classes['form-control']} ${zipCodeHasError && 'invalid'}`}>
          <label htmlFor='zipcode'>ZIP Code</label>
          <input type='text' id='zipcode' value={zipCodeValue} maxLength='5' onChange={zipCodeChangeHandler} onBlur={zipCodeBlurHandler} />
          {zipCodeHasError && (
            <p className={classes['error-text']}>Invalid zip code.</p>
          )}
        </div>
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
