import React from 'react';
import {Button, Modal} from "react-bootstrap";

const DeleteItemModal = ({setShow, deleteFunc, funcProps}) => {

    const handleClose = () => setShow(false);

    const accepting = () => {
        deleteFunc(funcProps)
        handleClose()
    }

    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>Are you sure?</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete this?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                <Button variant="primary" onClick={accepting}>Accept</Button>
            </Modal.Footer>
        </>
    );
};

export default DeleteItemModal;