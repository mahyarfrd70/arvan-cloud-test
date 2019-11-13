import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './style.css'

let instance;

export default class Confirm extends Component {

    constructor(props) {
        super(props)
        instance = this
        this.state = {
            show: false,
            callback: null
        }
    }

    showAlertLogic = (callback) => {
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
        instance.showConfimr(callback)
    }

    onDismiss = () => {
        this.resetState()
    }

    render() {
        let { callback, show } = this.state
        return (
            <Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
                <ModalHeader>Nested Modal title</ModalHeader>
                <ModalBody>Stuff and things</ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggleNested}>Done</Button>{' '}
                    <Button color="secondary" onClick={toggleAll}>All Done</Button>
                </ModalFooter>
            </Modal>
        )
    }
}
