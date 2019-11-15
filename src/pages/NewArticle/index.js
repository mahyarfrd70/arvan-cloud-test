import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AppLoading from '../../components/appLoading'
import CustomForm from '../../components/customForm'
import Tags from '../../components/tags'
import articlesService from '../../services/articles'
import inputs from './inputObjects'
import Alert from '../../components/alert'
import buildAlertMessage from '../../helpers/buildErrorMessage'
import './style.css'


export default function App({match ,history ,...props}) {
    let [state, setState] = useState({
        loading: true,
        initialFormValue: {},
        formLoading: false,
        tagList: []
    })
    let {slug} = match.params
    let fetchArticleData = async ()=>{
        if(slug){
            try{
                let response = await articlesService.getSingleArticle(`/articles/${slug}`)
                setState({
                    ...state,
                    loading: false,
                    initialFormValue: {...response.data.article},
                    tagList : [...response.data.article.tagList]
                })
            }catch(err){
                history.goBack()
                Alert.show('danger' , 'Fetch Article has error please try again')
            }
        }else{
            setState({
                ...state,
                loading: false,
                initialFormValue: {},
                tagList : []
            })
        }
    }
    
    useEffect(()=>{
        fetchArticleData()
    },[])

    let onChangeTags = (e)=>{
        setState({
            ...state,
            [e.target.name] : [...e.target.value]
        })
    }

    let editArticle = async (formValues)=>{
        let formValuesNew = {
            ...formValues,
            tagList: state.tagList
        } 
        setState({
            ...state,
            formLoading: true
        })
        try{
            let reaponse = await articlesService.editArticle(
                `/articles/${slug}`,
                {article: {...formValuesNew}}
            )
            history.goBack()
            setState({
                ...state,
                formLoading: false
            })
            Alert.show(
                'success' , 
                buildAlertMessage({'Well Done!': 'Article updated successfully'})
            )
        }catch(err){
            Alert.show('danger' , buildAlertMessage(err.response.data.errors))
            setState({
                ...state,
                formLoading: false
            })
        }
    }

    let addArticle = async (formValues)=>{
        let formValuesNew = {
            ...formValues,
            tagList: state.tagList
        } 
        setState({
            ...state,
            formLoading: true
        })
        try{
            let reaponse = await articlesService.addArticle(
                `/articles`,
                {article: {...formValuesNew}}
            )
            history.push('/articles')
            Alert.show('success' , buildAlertMessage({'Well Done!': 'Article created successfully'}))
            setState({
                ...state,
                formLoading: false
            })
        }catch(err){
            Alert.show('danger' , buildAlertMessage(err.response.data.errors))
            setState({
                ...state,
                formLoading: false
            })
        }
    }

    let submitForm = (formValues) =>{
        if(slug){
            editArticle(formValues)
        }else{
            addArticle(formValues)
        }
    }
    return (
        <AppLoading loading={state.loading}>
            <div className='add-article-container'>
                <h3>{slug ? 'Edit Article' : 'New Article'}</h3>
                <Tags 
                    tagStyleContainer='tags-container-add-article'
                    values={state.tagList}
                    inputName='tagList'
                    onChange={onChangeTags}/>
                <CustomForm
                    formClassStyle='add-article-form-container'
                    loading={state.formLoading}
                    initialFormValue={state.initialFormValue}
                    errorTitle='Login Failed!'
                    errorDescription='User name and/or Password is invalid'
                    inputs={inputs}
                    onSubmit={submitForm}
                    buttonTitle='Submit' 
                    buttonProps={{block: false}}/>
                
            </div>
        </AppLoading>
    )
}
