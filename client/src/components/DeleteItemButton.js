import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import DeleteItemModal from "./DeleteItemModal";

export default function DeleteItemButton({deleteFunc, funcProps}) {
    const [show, setShow] = useState(false);

    const modalClose = () => setShow(false)

    return (
        <>
            <Button
                variant="outline-light"
                size="sm"
                style={{float: 'right', borderRadius: "30px"}}
                onClick={() => setShow(true)}
            >
                <FontAwesomeIcon icon={faTimesCircle} color={"black"}/>
            </Button>
            <Modal show={show} onHide={modalClose}>
                <DeleteItemModal setShow={setShow} deleteFunc={deleteFunc} funcProps={funcProps}/>
            </Modal>
        </>
    )
}