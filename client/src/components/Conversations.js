import React from "react";
import {Button, ListGroup} from "react-bootstrap";
import {useConversations} from "../contexts/ConversationsProvider";

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
                    <Button onClick={() => deleteConversation(index)}
                            style={{float: 'right'}}>
                        X
                    </Button>
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}