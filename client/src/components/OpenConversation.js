import React, {useCallback, useState} from "react";
import {Button, Form, InputGroup} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {useConversations} from "../contexts/ConversationsProvider";
const {decryption} = require("../encryption/encrypt")

export default function OpenConversation() {
    const [text, setText] = useState('')

    const setRef = useCallback(node => {
        if (!node) return
        node.scrollIntoView({smooth: true})
    }, [])

    const {sendMessage, selectedConversation} = useConversations()


    const handleSubmit = (e) => {
        e.preventDefault()

        if (text === '') return

        sendMessage(selectedConversation.recipients.map(r => r.id), text.trim())
        setText('')
    }

    return (
        <div className="d-flex flex-column flex-grow-1">
            <div className="flex-grow-1 overflow-auto">
                <div className="d-flex flex-column align-items-start justify-content-end px-3 mt-3">
                    {selectedConversation.messages.map((message, index) => (
                        <div
                            ref={selectedConversation.messages.length - 1 === index ? setRef : null}
                            key={index}
                            className={`my-1 d-flex flex-column ${message.fromMe ? 'align-self-end align-items-end' :
                                'align-items-start'}`}
                        >
                            <div
                                className={`rounded px-2 py-1 ${message.fromMe ? 'bg-primary text-white' : 'border'}`}>
                                {message.fromMe ? message.text : decryption(message.text, "aboba")}
                            </div>
                            <div className={`text-muted small ${message.fromMe ? 'text-right' : ''}`}>
                                {message.fromMe ? 'You' : message.senderName}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="m-2">
                    <InputGroup>
                        <Form.Control
                            as="textarea"
                            required
                            value={text}
                            onChange={e => setText(e.target.value)}
                            style={{height: '50px', resize: 'none'}}
                            placeholder={'Type something...'}
                            onKeyPress={(e) => e.key === 'Enter' ? handleSubmit(e) : null}
                        />
                        <InputGroup.Append>
                            <Button type="submit"><FontAwesomeIcon icon={faPaperPlane}/></Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form.Group>
            </Form>
        </div>
    )
}