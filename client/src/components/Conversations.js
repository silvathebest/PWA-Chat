import React from "react";
import {ListGroup} from "react-bootstrap";
import {useConversations} from "../contexts/ConversationsProvider";
import DeleteItemButton from "./DeleteItemButton";

export default function Conversations() {
    const {conversations, selectConversationIndex, deleteConversation} = useConversations()

    return (
        <ListGroup variant="flush">
            {conversations.map((conversation, index) => (
                <ListGroup.Item
                    key={index}
                    action
                    onClick={() => selectConversationIndex(index)}
                    active={conversation.selected}
                >
                    {conversation.recipients.map(r => r.name).join(', ')}
                    <DeleteItemButton deleteFunc={deleteConversation} funcProps={index}/>
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}