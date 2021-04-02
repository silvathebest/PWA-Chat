import React from "react";
import {useContacts} from "../contexts/ContactsProvider";
import {ListGroup} from "react-bootstrap";
import DeleteItemButton from "./DeleteItemButton";

export default function Contacts() {
    const {contacts, deleteContact} = useContacts()

    return (
        <ListGroup variant="flush">
            {contacts.map(contact => (
                <ListGroup.Item style={{overflow: "hidden"}} key={contact.id}>
                    {contact.name}
                    <DeleteItemButton deleteFunc={deleteContact} funcProps={contact.id}/>
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}