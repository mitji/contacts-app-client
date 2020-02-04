const initialState = {
  contacts: null,           // state that is being updated
  copyContacts: null,       // state that is not being updated, for filter purposes 
  contactDetails: null
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
    
    case 'ADD_CONTACT_DETAILS':
      return {
        ...state,
        contacts:[...action.payload],
        contactDetails: action.payload[0]
      }

    case 'FILTER_BY_LETTER':
      const filteredContacts = state.contactsCopy.filter( contact => {
        return contact.name[0] === action.payload;
      })

      return( 
        {
          ...state,
          contacts:[...filteredContacts]
        }
      )

    case 'FILTER_BY_SEARCH':
        const searchResults = state.contactsCopy.filter( contact => {
          return contact.name.includes(action.payload);
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

    case 'GET_CONTACTS_OF_CONTACT':
        const taskIndex = state.contacts.findIndex( (el) => el._id === action.payload);
        state.contacts[taskIndex].done = !state.contacts[taskIndex].done;
        
        return {
          ...state
        }

    default:
      return state;
  }
}

export default contactsReducer;