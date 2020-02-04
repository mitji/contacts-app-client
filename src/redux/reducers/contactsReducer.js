const initialState = {
  contacts: []
}

const contactsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_ALL_CONTACTS':
      let newState = {
        ...state,
        contacts:[...action.payload]
      }
      return newState;
      
    case 'FILTER_BY_LETTER':
      return( 
        {
          ...state,
          contacts:[...action.payload]
        }
      )

    case 'FILTER_BY_SEARCH':
        return {
          ...state,
          contacts:[...state.contacts, action.payload],
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