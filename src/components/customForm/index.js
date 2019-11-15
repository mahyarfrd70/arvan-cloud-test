import React, {useState} from 'react'
import { Input, Button, Form, FormGroup, Label, FormFeedback } from 'reactstrap'
import Alert from '../alert'
import AlertMessage from '../alert/alertMessage'
import Loading from '../loading'
import './style.css'


let validateObject = (formInputs , initialValues)=>{
    let obj = {}
    for(let item of formInputs){
        if(!initialValues || !initialValues[item.name]){
            obj[item.name] = false
        }
    }
    return obj
}

export default ({
    inputs, 
    onChangeValue, 
    onSubmit,
    buttonTitle,
    initialFormValue, 
    buttonProps,
    formClassStyle,
    ...props
}) => {
    let inputNeedValidate = validateObject(
        inputs.filter(input=>input.required===true) , 
        initialFormValue
    )
    let [inputsValueObject , setInputsValueObject] = useState(initialFormValue || {})
    let [isInvalidField, setIsInvalidField] = useState({...inputNeedValidate})
    let changeFormInput = (e, required) => {
        if(required){
            if(!e.target.value){
                setIsInvalidField({...isInvalidField ,[e.target.name] : true})
            }else{
                let copyValidate = {...isInvalidField}
                delete copyValidate[e.target.name];
                setIsInvalidField(copyValidate)
            }
        }
        setInputsValueObject({
            ...inputsValueObject,
            [e.target.name] : e.target.value
        })
    }
    let clickLoginButton = (e) => {
        e.preventDefault()
        if(Object.keys(isInvalidField).length === 0){
            onSubmit(inputsValueObject)
        }else{
            let fields = {...isInvalidField}
            Object.keys(fields).forEach(item => {
                fields[item] = true
            })
            setIsInvalidField({...fields})
            let message = <AlertMessage title={props.errorTitle} description={props.errorDescription}/> 
            Alert.show('danger' , message )
        }
    }
    return (
        <Form
            className={formClassStyle}>
            {inputs.map(input => (
                <FormGroup key={input.key}>
                    <Label
                        for={input.id}>{input.label}</Label>
                    <Input
                        invalid={isInvalidField[input.name]}
                        value={inputsValueObject[input.name]}
                        size='sm'
                        type={input.type}
                        {...input.type === 'textarea' && {rows: input.row}}
                        name={input.name}
                        id={input.id}
                        placeholder={input.placeholder}
                        onChange={(e) => changeFormInput(e, input.required)} />
                    {input.required && <FormFeedback>Required field</FormFeedback>}
                </FormGroup>
            ))}
            {props.loading? (
                <Loading color='primary'/>
            ):(
                <Button
                    color="primary"
                    size="sm"
                    block
                    onClick={clickLoginButton}
                    {...buttonProps}>{buttonTitle}</Button>
            )}
        </Form>
    )
}
