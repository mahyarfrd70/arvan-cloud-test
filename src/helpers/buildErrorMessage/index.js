import React from 'react'
import AlertMassage from '../../components/alert/alertMessage'

let buildErrorMessage = (errors)=>{
    return Object.keys(errors).map(item=>{
        return <AlertMassage key={item} title={item} description={errors[item]}/>
    })
}

export default buildErrorMessage