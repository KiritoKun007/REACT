import React from 'react'

import './Input.scss'

const Input = (props) => {

    let inputElement = null
    let inputClasses = ['InputElement']
    let validationError = null

    if (props.inValid && props.shouldValidate && props.touched) {
        inputClasses.push('Invalid')
    }

    if (props.inValid && props.touched) {
        validationError =  <p className="ValidationErrorMessage">{props.validationErrorMsg}</p>
    }

    switch (props.elementType) {
        case 'input':
            inputElement = <input 
                className={inputClasses.join(' ')} 
                {...props.elementConfig}
                defaultValue={props.value}
                onChange={props.inputHandler} />
            break;
    
        case 'textarea': 
            inputElement = <textarea 
                className={inputClasses.join(' ')} 
                {...props.elementConfig}
                defaultValue={props.value}
                onChange={props.inputHandler} />
            break;

        case 'select': 
            inputElement = (
                <select
                    className={inputClasses.join(' ')}
                    name={props.elementConfig.name}
                    defaultValue={props.value}
                    onChange={props.inputHandler} >
                    {props.elementConfig.options.map(option => (
                        <option 
                            value={option.value} 
                            key={option.value} >
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            )
            break;

        default:
            inputElement = <input 
                className={inputClasses.join(' ')} 
                {...props.elementConfig}
                defaultValue={props.value}
                onChange={props.inputHandler} />
            break;
    }

    return (
        <div className="Input" >
            <label className="InputLabel">{props.label}</label>   
            {inputElement}
            {validationError}
        </div>
    )
}

export default Input
