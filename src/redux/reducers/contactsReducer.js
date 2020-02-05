const initialState = {
  contacts: null,           // state that is being updated
  copyContacts: null,       // state that is not being updated, for filter purposes 
  contactDetails: null,
  contactConnections: null
}

const contactsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_ALL_CONTACTS':
      let newState = {
        ...state,
        contacts: [...action.payload],
        contactsCopy: [...action.payload],
      }
      return newState;

    case 'FILTER_BY_LETTER':
      const filteredContacts = state.contactsCopy.filter( contact => {
        return contact.name[0] === action.payload;
      })

      return {
          ...state,
          contacts:[...filteredContacts]
      }
      
    case 'FILTER_BY_SEARCH':
        const searchResults = state.contactsCopy.filter( contact => {
          return contact.name.toLowerCase().includes(action.payload);
        })

        return {
          ...state,
          contacts:[...searchResults]
        };

    case 'REMOVE_FILTERS':
      return {
        ...state,
        contacts:[...state.contactsCopy]
      };

    case 'ADD_CONTACT_DETAILS':
      const contact = action.payload;
      const contactsArr = contact.connections;

      const contactsObj = state.contactsCopy.filter( contact => {
        return contactsArr.includes(contact.id)
      })
      contact.connections = contactsObj;

      return {
        ...state,
        contactDetails: contact,
        contactConnections: contactsObj
      }

    case 'FILTER_CONNECTIONS':
      const search = action.payload;
      const connections = state.contactDetails.connections;
      const filteredConnections = connections.filter( connection => {
        return connection.name.toLowerCase().includes(search);
      })
      return {
        ...state,
        contactConnections: [...filteredConnections]
      }

    default:
      return state;
  }
}

export default contactsReducer;