// import { useState, useEffect  } from 'react'
// import { nanoid } from 'nanoid'
import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'
// import { useDispatch, useSelector } from 'react-redux'
// import { deleteContact } from './redux/contactsSlice'
// import { changeFilter } from './redux/filtersSlice'
// import { addContact } from './redux/actions'


function App() {
  // const [search, setSearch] = useState('')
  // let [contacts, setContact] = useState(() => {
  //   const savedContacts = JSON.parse(localStorage.getItem("Contacts"))
  //   if (savedContacts === null) {
  //     return [
  // {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  // {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  // {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  // {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  // ]
  //   }
  //   return savedContacts
  // })

  // const contacts = useSelector(state => state.contacts.contacts.items)
  // const filterName = useSelector(state => state.contacts.filters.name)

  // const dispatch = useDispatch()

  // const handleSome = () => {
  //   dispatch(increment())
  // }

  // useEffect(() => {
  //   window.localStorage.setItem("Contacts", JSON.stringify(contacts));
  // }, [contacts]);

  // let filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filterName.trim().toLowerCase()))
  // let filteredContacts
  
  // const handleClickDelete = (id) => {
  //   dispatch(deleteContact(id))
  //   // setContact(contacts.filter(contact => contact.id !== id))
  // // }

  // useEffect(() => {
  //   // console.log("contacts updated: ", contacts);
  //   }, [contacts, filterName]);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        {/* <ContactForm handleSubmit={handleSubmit} /> */}
        <ContactForm />
        {/* <SearchBox onSearch={setSearch} handleChange={handleChange} /> */}
        {/* <SearchBox handleChange={handleChange} /> */}
        <SearchBox />
        {/* <ContactList contacts={contacts} handleClickDelete={handleClickDelete} /> */}
        {/* <ContactList contacts={filteredContacts} handleClickDelete={handleClickDelete} /> */}
        {/* <ContactList handleClickDelete={handleClickDelete} /> */}
        <ContactList />
      </div>

    </>
  )
}

export default App
