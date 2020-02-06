const initialState = {
  contacts: null,           // state that is being updated
  copyContacts: null,       // state that is not being updated, for filter purposes 
  contactDetails: null,
  contactConnections: null,
  activeSearch: false
}

const contactsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_ALL_CONTACTS':
      const allContacts = action.payload;
      allContacts.sort( (a,b) => a.name.localeCompare(b.name)); // sort it alphabetically
      const newState = {
        ...state,
        contacts: [...allContacts],
        contactsCopy: [...allContacts],
      }
      return newState;

    case 'FILTER_BY_LETTER':
      const filteredContacts = state.contactsCopy.filter( contact => {
        return contact.name[0] === action.payload;
      })

      return {
          ...state,
          contacts:[...filteredContacts],
          activeSearch: true
      }
      
    case 'FILTER_BY_SEARCH':
        const searchResults = state.contactsCopy.filter( contact => {
          return contact.name.toLowerCase().includes(action.payload);
        })

        let active = true;
        if (action.payload === '') {
          active = false;
        }

        return {
          ...state,
          contacts:[...searchResults],
          activeSearch: active
        };

    case 'REMOVE_FILTERS':
      return {
        ...state,
        contacts:[...state.contactsCopy],
        activeSearch: false
      };
    
    case 'DEACTIVATE_SEARCH':
      return {
        ...state,
        activeSearch: false
      };

    case 'ADD_CONTACT_DETAILS':
      const contact = action.payload;
      const contactsArr = contact.connections;

      const contactsObj = state.contactsCopy.filter( contact => {
        return contactsArr.includes(contact.id)
      })

      contactsObj.sort( (a,b) => a.name.localeCompare(b.name));
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