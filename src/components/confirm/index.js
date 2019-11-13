import React, { Component } from 'react'
import {connect} from 'react-redux'
import { 
    Button, 
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter 
} from 'reactstrap';

import './style.css'

let confirmInstance;

class Confirm extends Component {

    constructor(props) {
        super(props)
        confirmInstance = this
        this.state = {
            show: false,
            callback: null
        }
    }

    showConfirm = (callback) => {
        this.setState({
            show: true,
            callback,
        })
    }

    resetState = () => {
        this.setState({
            show: false,
            callback: null
        })
    }

    static show(callback) {
        confirmInstance.showConfirm(callback)
    }

    onDismiss = () => {
        this.resetState()
    }

    okButtonClick = async () =>{
        try{
            await this.state.callback()
            this.resetState()
        }catch(err){
            // code for error
        }
    }

    render() {
        let { callback, show } = this.state
        let {...props} = this.props
        return (
            <Modal isOpen={show} toggle={this.onDismiss} {...props}>
                <ModalHeader>Delete Article</ModalHeader>
                <ModalBody>Are you sure to delete Article?</ModalBody>
                <ModalFooter>
                    <Button 
                        outline 
                        color="secondary" 
                        onClick={this.onDismiss}
                    >Cancel</Button>
                    <Button 
                        disabled={this.props.loading}
                        color="danger" 
                        onClick={this.okButtonClick}
                    >Delete</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

export default connect(state=>({
    loading: state.ConfirmReducer.loading
}))(Confirm)
