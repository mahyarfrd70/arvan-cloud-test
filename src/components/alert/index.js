import React, { Component } from 'react'
import { Alert } from 'reactstrap';

let instance;

export default class CustomAlret extends Component {

    constructor(props){
        super(props)
        instance = this
        this.state ={
            show: false,
            type: '',
            body: ''
        }
    }

    showAlertLogic = (type , body) =>{
        clearTimeout(this.timefunction)
        this.setState({
            show: true,
            type,
            body
        }, () => {
            this.timefunction = setTimeout(()=>{
                 this.resetState()
            }, this.props.time)
        })
    }

    resetState =()=>{
        this.setState({
            show: false,
            type: '',
            body: ''
        })
    }

    static show(type , body){
        instance.showAlertLogic(type , body)
    }


    onDismiss = () => {
        this.resetState()
    }

    render() {
        let { type, body, show } = this.state
        return (
            <Alert color={type} isOpen={show} toggle={this.onDismiss}>
                {body}
            </Alert>
        )
    }
}
