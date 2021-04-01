import React from "react";
import {useContacts} from "../contexts/ContactsProvider";
import {Button, ListGroup} from "react-bootstrap";

export default function Contacts() {
    const {contacts, deleteContact} = useContacts()

    return (
        <ListGroup variant="flush">
            {contacts.map(contact => (
                <ListGroup.Item key={contact.id}>
                    {contact.name}
                    <Button onClick={() => deleteContact(contact.id)} style={{float: 'right'}}>X</Button>
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}