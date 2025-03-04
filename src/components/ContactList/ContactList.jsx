import { useSelector } from 'react-redux'
import Contact from '../Contact/Contact'

export default function ContactList() {
    const contacts = useSelector(state => state.contacts.contacts.items)
    const filterName = useSelector(state => state.contacts.filters.name)

    let filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filterName.trim().toLowerCase()))
    
    return (
        <ul>
            {filteredContacts.map((item) => (<li key={item.id}><Contact contact={item}/></li>))}
        </ul>
    )
}