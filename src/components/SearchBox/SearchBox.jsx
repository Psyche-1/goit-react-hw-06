import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
// import { useEffect } from "react";

export default function SearchBox() {
    // const contacts = useSelector(state => state.contacts.contacts.items)
    // const filterName = useSelector(state => state.contacts.filters.name)
    
    const dispatch = useDispatch()

    const handleChange = (event) => {
    // filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(search.trim().toLowerCase()))
    // setSearch(event.target.value);
    // filteredContacts = dispatch(changeFilter(event.target.value))
    // console.log(filteredContacts);
        dispatch(changeFilter(event.target.value))
        // console.log(event.target.value);
        
    };
  
    // useEffect(() => {
    //   // console.log("contacts updated: ", contacts);
    //   }, [contacts, filterName]);
    
    return (
        <>
            <p>Find contacts by name</p>
            <input type="text" onChange={handleChange}  />
        </>
    )
}