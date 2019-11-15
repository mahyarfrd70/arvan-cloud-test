import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AppLoading from '../../components/appLoading'
import CustomForm from '../../components/customForm'
import inputs from './inputObjects'
import './style.css'

import Tags from '../../components/tags'

export default function App(props) {
    let [tags, setTags] = useState({
        tagList: ['dragons' , 'training' , 'butt']
    })
    return (
        // <AppLoading loading={loading}>
            // <h3>All Posts</h3>
            <CustomForm
                // loading={loading}
                errorTitle='Login Failed!'
                errorDescription='User name and/or Password is invalid'
                inputs={inputs}
                // onSubmit={submitForm}
                buttonTitle='Login' />
        // </AppLoading>
        // <Tags 
        //     values={tags.tagList}
        //     inputName='tagList'
        //     onChange={(e)=>{
        //         setTags({
        //             ...tags,
        //             [e.target.name] : e.target.value
        //         })
        //     }}/>
    )
}
