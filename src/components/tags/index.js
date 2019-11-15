import React, { useEffect, useState } from 'react'
import {Input, Button , FormGroup, Label , CustomInput} from 'reactstrap'
import tagsService from '../../services/tags'
import Loading from '../loading'
import './style.css'

export default function Tags({containerStyle, values , onChange, inputName, ...props}) {
    let [state , setState] = useState({
        loading: true,
        tags: [],
        error: false
    })
    let keyPressInput = (e)=>{
        if(e.key === 'Enter'){
            if(e.target.value){
                changeTagsValue({target: {id: e.target.value}})
                setState({
                    ...state,
                    tags: [e.target.value , ...state.tags]
                })
            }
        }
    }
    let getTags = async()=>{
        try{
            let response = await tagsService.getTags('/tags')
            setState({
                loading:false,
                tags: [...response.data.tags],
                error: false
            })
        }catch(err){
            setState({
                loading:false,
                error: true
            })
        }
    }
    let changeTagsValue = (e)=>{
        let currentValues = [...values]
        let newValues ;
        if(values.includes(e.target.id)){
            newValues = currentValues.filter(item => item !== e.target.id)
        }else{
            newValues = [...values, e.target.id]
        }
        onChange({target: {name: inputName , value: newValues}})
    }
    useEffect(()=>{
        getTags()
    }, [])
    return (
        <div 
            className='tags-container' 
            style={{...containerStyle}}>
            <Input 
                className='tags-input'
                type="input" 
                name="tagList" 
                size='sm'
                id="tagList" 
                placeholder="New Tag"
                onKeyUp={keyPressInput} />
            {state.error ? (
                <>
                    <p>Fetch tags has Error , for fetching again click fetch again button</p>
                    <Button
                        color="primary"
                        size="sm"
                        block
                        onClick={getTags}>Fetch Again</Button>
                </>
            ): state.loading ? (
                <Loading color='primary'/>
            ):(
                <div className='tags-box'>
                    {state.tags.map((item , index)=>(
                        <FormGroup 
                            key={item}>
                            <CustomInput 
                                type="checkbox" 
                                id={item} 
                                label={item}
                                checked={values && values.includes(item)}
                                onChange={changeTagsValue}/>
                        </FormGroup>
                    ))}
                </div>
            )}
        </div>
    )
}
