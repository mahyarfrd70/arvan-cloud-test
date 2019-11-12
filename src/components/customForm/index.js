import React, {useState} from 'react'
import { Input, Button, Form, FormGroup, Label, FormFeedback } from 'reactstrap'
import Alert from '../alert'
import AlertMessage from '../alert/alertMessage'
import Loading from '../loading'
import './style.css'


let validateObject = (formInputs)=>{
    let obj = {}
    for(let item of formInputs){
        obj[item.name] = false
    }
    return obj
}

export default ({inputs, onChangeValue, onSubmit, buttonTitle, ...props}) => {
    let inputNeedValidate = validateObject(inputs.filter(input=>input.required===true))
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
        onChangeValue(e)
    }
    let clickLoginButton = (e) => {
        e.preventDefault()
        if(Object.keys(isInvalidField).length === 0){
            onSubmit()
            // dispatch(login(loginFormValue))
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
        <Form>
            {inputs.map(input => (
                <FormGroup key={input.key}>
                    <Label
                        for={input.id}>{input.label}</Label>
                    <Input
                        invalid={isInvalidField[input.name]}
                        size='sm'
                        type={input.type}
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
                    onClick={clickLoginButton}>{buttonTitle}</Button>
            )}
        </Form>
    )
}
