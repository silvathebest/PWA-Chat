import React from "react";
import {Button} from "react-bootstrap";
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function DeleteItemButton({deleteFunc, funcProps}) {

    return (
        <Button
            variant="outline-light"
            size="sm"
            style={{float: 'right', borderRadius: "30px"}}
            onClick={() => deleteFunc(funcProps)}
        >
            <FontAwesomeIcon icon={faTimesCircle} color={"black"}/>
        </Button>
    )
}