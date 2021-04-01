import React, {useState} from "react";
import {Button, Form, Modal} from "react-bootstrap";
import {useContacts} from "../contexts/ContactsProvider"
import {useConversations} from "../contexts/ConversationsProvider"

export default function NewConversationModal({modalClose}) {
    const [selectedContactIds, setSelectedContactIds] = useState([])

    const {contacts} = useContacts()
    const {createConversation} = useConversations()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (selectedContactIds.length === 0) return

        createConversation(selectedContactIds)
        modalClose()
    }

    const handleCheckboxChange = (contactId) => {
        setSelectedContactIds(prevSelectedContactIds => prevSelectedContactIds.includes(contactId) ?
            prevSelectedContactIds.filter(prevId => contactId !== prevId) : [...prevSelectedContactIds, contactId]
        )
    }

    return (
        <>
            <Modal.Header closeButton>Create Conversations</Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    {contacts.map(contact => (
                        <Form.Group controlId={contact.id} key={contact.id}>
                            <Form.Check
                                type="checkbox"
                                value={selectedContactIds.includes(contact.id)}
                                label={contact.name}
                                onChange={() => handleCheckboxChange(contact.id)}
                            />
                        </Form.Group>
                    ))}
                    <Button type="submit">Create</Button>
                </Form>
            </Modal.Body>
        </>
    )
}