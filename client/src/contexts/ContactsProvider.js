import React, {useContext} from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ContactsContext = React.createContext()

export function useContacts() {
    return useContext(ContactsContext)
}

export function ContactsProvider({children}) {
    const [contacts, setContacts] = useLocalStorage('contacts', [])

    const createContact = (id, name) => {
        setContacts(prevContacts => [...prevContacts, {id, name}]);
    }

    const deleteContact = (id) => {
        setContacts(prevContacts => prevContacts.filter(item => item.id !== id));
    }

    return (
        <ContactsContext.Provider value={{contacts, createContact, deleteContact}}>
            {children}
        </ContactsContext.Provider>
    )
}